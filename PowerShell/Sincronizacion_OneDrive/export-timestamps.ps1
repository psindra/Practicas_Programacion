param(
    [string]$Path = $PSScriptRoot,
    [string]$TimestampsFile = "$Path\.timestamps.csv",
    [string]$LogFile = "$Path\sincronizacion_timestamps.log"
)
#>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function Print_Log {
    param (
        [Parameter(Mandatory=$true)][string]$Message,
        [ValidateSet("INFO", "SUCCESS","ERROR","WARNING")][string]$Level = "INFO"
    )

    switch ($Level) {
        "SUCCESS" { Write-Host $Message -ForegroundColor Green }
        "INFO" { Write-Host $Message -ForegroundColor Cyan }
        "ERROR" { Write-Host $Message -ForegroundColor Red }
        "WARNING" { Write-Host $Message -ForegroundColor Yellow }
    }

    $logEntry = "$((Get-Date).ToString('yyyy-MM-dd HH:mm:ss')) [$Level] $Message"
    Add-Content -Path $LogFile -Value $logEntry
}
#>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# Validar ruta
if (-not (Test-Path $Path)) {
    Print_Log "Ruta no encontrada: $Path" -Level "ERROR"
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
    @{
        Name       = 'CreationTime'
        Expression = { $_.CreationTime.ToString('o') }
    },
    @{
        Name       = 'LastWriteTime'
        Expression = { $_.LastWriteTime.ToString('o') }
    },
    @{
        Name       = 'LastAccessTime'
        Expression = { $_.LastAccessTime.ToString('o') }
    } |
    Export-Csv -Path $TimestampsFile -NoTypeInformation -Encoding UTF8

Print_Log "Timestamps exportados: $TimestampsFile" -Level "SUCCESS"
Print_Log "Total de elementos: $((Import-Csv $TimestampsFile).Count)" -Level "INFO"