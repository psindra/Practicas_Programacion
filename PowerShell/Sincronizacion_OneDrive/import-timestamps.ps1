param(
    [string]$Path = $PSScriptRoot,
    [string]$TimestampsFile = "$Path\.timestamps.csv",
    [string]$LogFile = "$Path\import-timestamps.log"
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

# Validar archivos y rutas
if (-not (Test-Path $TimestampsFile)) {
    Print_Log -Message "Archivo CSV no encontrado: $TimestampsFile" -Level "ERROR"
    exit 1
}

if (-not (Test-Path $Path)) {
    Print_Log -Message "Ruta destino no encontrada: $Path" -Level "ERROR"
    exit 1
}

# Importar CSV
$timestamps = Import-Csv -Path $TimestampsFile -Encoding UTF8

# Ordenar por profundidad descendente (procesa primero archivos/carpetas más profundas)
$timestampsSorted = $timestamps | Sort-Object -Property Depth -Descending

$updatedCount = 0
$errorCount = 0

# Aplicar marcas de tiempo
foreach ($item in $timestampsSorted) {
    $fullPath = Join-Path -Path $Path -ChildPath $item.RelativePath
    
    if (-not (Test-Path $fullPath)) {
        Print_Log "No encontrado: $($item.RelativePath)" -Level "ERROR"
        $errorCount++
        continue
    }
    
    try {
        $obj = Get-Item -Path $fullPath -Force
        
        # Actualizar marcas de tiempo
        $obj.CreationTime = date $item.CreationTime
        $obj.LastWriteTime = date $item.LastWriteTime
        $obj.LastAccessTime = date $item.LastAccessTime
        
        $updatedCount++
    }
    catch {
        Print_Log "Error al actualizar '$($item.RelativePath)': $_" -Level "ERROR"
        $errorCount++
    }
}

Print_Log "Marcas de tiempo importadas: $updatedCount elementos" -Level "SUCCESS"
if ($errorCount -gt 0) {
    Print_Log "Errores encontrados: $errorCount elementos" -Level "WARNING"
}



##########################################################################
# Validación: Verificar marcas de tiempo aplicadas correctamente
Print_Log "Validando resultados..." -Level "INFO"
$validationErrors = 0

foreach ($item in $timestamps | Select-Object -First 10) {  # Valida primeros 10 elementos
    $fullPath = Join-Path -Path $Path -ChildPath $item.RelativePath

    if (-not (Test-Path $fullPath)) {
        Print_Log -Message "No encontrado durante validación: $($item.RelativePath)" -Level "ERROR"
        $validationErrors++
        continue
    }

    $obj = Get-Item -Path $fullPath -Force

    $expectedCreation = date $item.CreationTime
    $expectedLastWrite = date $item.LastWriteTime
    $expectedLastAccess = date $item.LastAccessTime

    if ($obj.CreationTime -ne $expectedCreation) {
        Print_Log "CreationTime incorrecta en '$($item.RelativePath)'. $expectedCreation ➡️ $($obj.CreationTime)" -Level "WARNING"
        $validationErrors++
    }

    if ($obj.LastWriteTime -ne $expectedLastWrite) {
        Print_Log "LastWriteTime incorrecta en '$($item.RelativePath)'. $expectedLastWrite ➡️ $($obj.LastWriteTime)" -Level "WARNING"
        $validationErrors++
    }

    if ($obj.LastAccessTime -ne $expectedLastAccess) {
        Print_Log "LastAccessTime incorrecta en '$($item.RelativePath)'. $expectedLastAccess ➡️ $($obj.LastAccessTime)" -Level "WARNING"
        $validationErrors++
    }
}

if ($validationErrors -eq 0) {
    Print_Log "Validación exitosa: marcas de tiempo correctas" -Level "SUCCESS"
} else {
    Print_Log "Validación encontró $validationErrors discrepancias" -Level "WARNING"
}