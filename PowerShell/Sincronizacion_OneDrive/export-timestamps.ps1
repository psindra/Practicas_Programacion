param(
    [string]$Path = $PSScriptRoot,
    [string]$TimestampsFile = "$Path\.timestamps.csv"
)

# Validar ruta
if (-not (Test-Path $Path)) {
    Write-Error "Ruta no encontrada: $Path"
    exit 1
}

# Recolectar timestamps (archivos y carpetas)
Get-ChildItem -Path $Path -Recurse -Force |
    Select-Object -Property @{ 
        Name       = 'RelativePath'
        Expression = { $_.FullName.Substring($Path.Length).TrimStart('\') }
    },
    @{ 
        Name       = 'IsDirectory'
        Expression = { $_.PSIsContainer }
    },
    @{ 
        Name       = 'Depth'
        Expression = { ($_.FullName.Substring($Path.Length).TrimStart('\')).Split('\').Count }
    },
    CreationTime,
    LastWriteTime,
    LastAccessTime |
    Export-Csv -Path $TimestampsFile -NoTypeInformation -Encoding UTF8

Write-Host "Timestamps exportados: $TimestampsFile" -ForegroundColor Green
Write-Host "Total de elementos: $((Import-Csv $TimestampsFile).Count)"