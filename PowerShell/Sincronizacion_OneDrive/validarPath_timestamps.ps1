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
    try {
        Add-Content -LiteralPath $LogFile -Value $logEntry
    }
    catch {
        Write-Host "Error al escribir en el archivo de log: $_"
    }
}
#>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# Validar archivos y rutas
if (-not (Test-Path -LiteralPath $TimestampsFile)) {
    Print_Log -Message "Archivo CSV no encontrado: $TimestampsFile" -Level "ERROR"
    exit 1
}

if (-not (Test-Path -LiteralPath $Path)) {
    Print_Log -Message "Ruta destino no encontrada: $Path" -Level "ERROR"
    exit 1
}

# Importar CSV
Write-Progress -Activity "Recuperar timestamps" -Status "Cargando archivo CSV"
$timestamps = Import-Csv -LiteralPath $TimestampsFile -Encoding UTF8



##########################################################################
# Validación: Verificar marcas de tiempo aplicadas correctamente
Print_Log "Validando rutas" -Level "INFO"
$validationErrors = 0
$validations = 0

foreach ($item in $timestamps) {  # Valida todos los elementos
    $fullPath = Join-Path -Path $Path -ChildPath $item.RelativePath

    Write-Progress -Activity "Validando existencia" -Status $item.RelativePath -PercentComplete (($validations + $validationErrors) / $timestamps.Count * 100)

    if (-not (Test-Path -LiteralPath $fullPath)) {
        Print_Log -Message "No encontrado durante validación: $($item.RelativePath)" -Level "ERROR"
        $validationErrors++
        continue
    }

    $validations++
}

if ($validationErrors -eq 0) {
    Print_Log "Validación exitosa: Path correctos" -Level "SUCCESS"
} else {
    Print_Log "Validación encontró $validationErrors discrepancias" -Level "WARNING"
    Print_Log "y $validations elementos existentes" -Level "INFO"
}