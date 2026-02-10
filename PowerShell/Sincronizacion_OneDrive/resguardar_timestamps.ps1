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
    Add-Content -LiteralPath $LogFile -Value $logEntry
}
#>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# Validar ruta
if (-not (Test-Path -LiteralPath $Path)) {
    Print_Log "Ruta no encontrada: $Path" -Level "ERROR"
    exit 1
}

# Recolectar timestamps (archivos y carpetas) mostrando el path relativo en la misma línea
$items = Get-ChildItem -LiteralPath $Path -Recurse -Force
$total = $items.Count
if ($total -eq 0) {
    Print_Log "No se encontraron elementos en: $Path" -Level "WARNING"
} else {
    $i = 0
    $rows = foreach ($item in $items) {
        $i++
        $relative = $item.FullName.Substring($Path.Length).TrimStart('\')
        $percent = [int](($i / $total) * 100)
        Write-Progress -Activity "Exportando timestamps" -Status $relative -PercentComplete $percent

        [pscustomobject]@{
            RelativePath   = $relative
            IsDirectory    = $item.PSIsContainer
            Depth          = ($relative.Split('\').Count)
            CreationTime   = $item.CreationTime.ToString('o')
            LastWriteTime  = $item.LastWriteTime.ToString('o')
            LastAccessTime = $item.LastAccessTime.ToString('o')
        }
    }

    # Completar y exportar
    Write-Progress -Activity "Exportando timestamps" -Completed
    $rows | Export-Csv -LiteralPath $TimestampsFile -NoTypeInformation -Encoding UTF8
}

Print_Log "Timestamps exportados: $TimestampsFile" -Level "SUCCESS"
Print_Log "Total de elementos: $((Import-Csv $TimestampsFile).Count)" -Level "INFO"