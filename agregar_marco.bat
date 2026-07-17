@echo off
setlocal
chcp 65001 >nul
title COMPRA CASA CLUB - Agregar marco al tour 360
cd /d "%~dp0"

echo ============================================
echo   COMPRA CASA CLUB - Agregar marco al tour
echo ============================================
echo.
echo Este .bat debe estar en la carpeta 360, al mismo
echo nivel que la carpeta de cada propiedad (ej: vertiz-1014-narvarte).
echo.

set /p CARPETA=Nombre EXACTO de la carpeta del tour (ej: vertiz-1014-narvarte):
set /p NOMBRE=Nombre de la propiedad a mostrar (ej: Vertiz 1014, Narvarte):

echo.

if not exist "%CARPETA%\index.html" (
    echo [X] No encontre index.html dentro de "%CARPETA%"
    echo     Revisa que el nombre de la carpeta este bien escrito
    echo     y que este al mismo nivel que este .bat.
    echo.
    pause
    exit /b 1
)

python inject_overlay.py "%CARPETA%" "%NOMBRE%"

if errorlevel 1 (
    echo.
    echo [X] Algo fallo. Si el error dice "python no se reconoce",
    echo     necesitas instalar Python desde https://www.python.org/downloads/
    echo     y durante la instalacion marcar la casilla "Add Python to PATH".
) else (
    echo.
    echo [OK] Listo. Ya puedes subir la carpeta "%CARPETA%" a GitHub.
)

echo.
pause
