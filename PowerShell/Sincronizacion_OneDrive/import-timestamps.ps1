param(
    [string]$Path = $PSScriptRoot,
    [string]$TimestampsFile = "$Path\.timestamps.csv",
    [string]$LogFile = "$Path\import-timestamps.log"
)

function Print_Log {
    param (
        [Parameter(Mandatory=$true)][string]$Message,
        [ValidateSet("INFO", "SUCCESS","ERROR","WARNING")][string]$Level = "INFO"
    )
    
    $logEntry = "(Get-Date).ToString('yyyy-MM-dd HH:mm:ss') [$Level] $Message"
    switch ($Level) {
        "SUCCESS" { Write-Host $logEntry -ForegroundColor Green }
        "INFO" { Write-Host $logEntry -ForegroundColor Cyan }
        "ERROR" { Write-Host $logEntry -ForegroundColor Red }
        "WARNING" { Write-Host $logEntry -ForegroundColor Yellow }
    }
    Add-Content -Path $LogFile -Value $logEntry
}

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
        $obj.CreationTime = [DateTime]$item.CreationTime
        $obj.LastWriteTime = [DateTime]$item.LastWriteTime
        $obj.LastAccessTime = [DateTime]$item.LastAccessTime
        
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
Print_Log "`nValidando resultados..." -Level "INFO"
$validationErrors = 0

foreach ($item in $timestamps | Select-Object -First 10) {  # Valida primeros 10 elementos
    $fullPath = Join-Path -Path $Path -ChildPath $item.RelativePath

    if (-not (Test-Path $fullPath)) {
        Print_Log -Message "No encontrado durante validación: $($item.RelativePath)" -Level "ERROR"
        $validationErrors++
        continue
    }

    $obj = Get-Item -Path $fullPath -Force

    $expectedCreation = [DateTime]$item.CreationTime
    $expectedLastWrite = [DateTime]$item.LastWriteTime
    $expectedLastAccess = [DateTime]$item.LastAccessTime

    if ($obj.CreationTime -ne [DateTime]$item.CreationTime) {
        Write-Warning "CreationTime incorrecta en '$($item.RelativePath)'. Esperado: $expectedCreation, Actual: $($obj.CreationTime)"
        $validationErrors++
    }

    if ($obj.LastWriteTime -ne [DateTime]$item.LastWriteTime) {
        Write-Warning "LastWriteTime incorrecta en '$($item.RelativePath)'. Esperado: $expectedLastWrite, Actual: $($obj.LastWriteTime)"
        $validationErrors++
    }

    if ($obj.LastAccessTime -ne [DateTime]$item.LastAccessTime) {
        Write-Warning "LastAccessTime incorrecta en '$($item.RelativePath)'. Esperado: $expectedLastAccess, Actual: $($obj.LastAccessTime)"
        $validationErrors++
    }
}

if ($validationErrors -eq 0) {
    Write-Host "Validación exitosa: marcas de tiempo correctas" -ForegroundColor Green
} else {
    Write-Host "Validación encontró $validationErrors discrepancias" -ForegroundColor Yellow
}