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

# Ordenar por profundidad descendente (procesa primero archivos/carpetas más profundas)
Write-Progress -Activity "Recuperar timestamps" -Status "Ordenando elementos"
$timestampsSorted = $timestamps | Sort-Object -Property Depth -Descending
$updatedCount = 0
$errorCount = 0

# Aplicar marcas de tiempo
Write-Progress -Activity "Recuperar timestamps" -Status "Aplicando marcas de tiempo" -PercentComplete 0
foreach ($item in $timestampsSorted){
    Write-Progress -Activity "Recuperar timestamps" -Status $item.RelativePath -PercentComplete (($updatedCount + $errorCount) / $timestampsSorted.Count * 100)
    $fullPath = Join-Path -Path $Path -ChildPath $item.RelativePath
    
    if (-not (Test-Path -LiteralPath $fullPath)) {
        Print_Log "No encontrado: $($item.RelativePath)" -Level "ERROR"
        $errorCount++
        continue
    }
    
    try {
        $obj = Get-Item -LiteralPath $fullPath -Force
        
        # Actualizar marcas de tiempo
        
        # saltear si CreationTime es despues del 06/02/2026
        if(([datetime]($item.CreationTime)) -lt ([datetime]"2026-02-05")) {
            $obj.CreationTime = [datetime] ($item.CreationTime)
        }

        # saltear si LastWriteTime es despues del 06/02/2026
        if(([datetime]($item.LastWriteTime)) -lt ([datetime]"2026-02-05")) {
            $obj.LastWriteTime = [datetime] ($item.LastWriteTime)
        }

        # saltear si LastAccessTime es despues del 06/02/2026
        if(([datetime]($item.LastAccessTime)) -lt ([datetime]"2026-02-05")) {
            $obj.LastAccessTime = [datetime] ($item.LastAccessTime)
        }
        
        $updatedCount++
    }
    catch {
        Print_Log "Error al actualizar '$($item.RelativePath)': $_" -Level "ERROR"
        $errorCount++
    }
}

Write-Progress -Activity "Recuperar timestamps" -Status "Finalizando" -PercentComplete 100
Print_Log "Marcas de tiempo importadas: $updatedCount elementos" -Level "SUCCESS"
if ($errorCount -gt 0) {
    Print_Log "Errores encontrados: $errorCount elementos" -Level "WARNING"
}



##########################################################################
# Validación: Verificar marcas de tiempo aplicadas correctamente
Print_Log "Validando resultados..." -Level "INFO"
$validationErrors = 0
$validations = 0

foreach ($item in $timestamps) {  # Valida todos los elementos
    $fullPath = Join-Path -Path $Path -ChildPath $item.RelativePath

    Write-Progress -Activity "Validando marcas de tiempo" -Status $item.RelativePath -PercentComplete (($validations) / $timestamps.Count * 100)

    if (-not (Test-Path -LiteralPath $fullPath)) {
        Print_Log -Message "No encontrado durante validación: $($item.RelativePath)" -Level "ERROR"
        $validationErrors++
        continue
    }

    $obj = Get-Item -LiteralPath $fullPath -Force

    
    if(([datetime]($item.CreationTime)) -lt ([datetime]"2026-02-05")) {
        $expectedCreation = [datetime] $item.CreationTime
        if ($obj.CreationTime -ne $expectedCreation) {
            Print_Log "CreationTime incorrecta en '$($item.RelativePath)'. $expectedCreation -> $($obj.CreationTime)" -Level "WARNING"
            $validationErrors++
        }
    }
    if(([datetime]($item.LastWriteTime)) -lt ([datetime]"2026-02-05")) {
        $expectedLastWrite = [datetime] $item.LastWriteTime
        if ($obj.LastWriteTime -ne $expectedLastWrite) {
            Print_Log "LastWriteTime incorrecta en '$($item.RelativePath)'. $expectedLastWrite -> $($obj.LastWriteTime)" -Level "WARNING"
            $validationErrors++
        }
    }
    if(([datetime]($item.LastAccessTime)) -lt ([datetime]"2026-02-05")) {
        $expectedLastAccess = [datetime] $item.LastAccessTime
        if ($obj.LastAccessTime -ne $expectedLastAccess) {
            Print_Log "LastAccessTime incorrecta en '$($item.RelativePath)'. $expectedLastAccess -> $($obj.LastAccessTime)" -Level "WARNING"
            $validationErrors++
        }
    }

    $validations++
}

if ($validationErrors -eq 0) {
    Print_Log "Validación exitosa: marcas de tiempo correctas" -Level "SUCCESS"
} else {
    Print_Log "Validación encontró $validationErrors discrepancias" -Level "WARNING"
    Print_Log "y $validations elementos validados correctamente" -Level "INFO"
}