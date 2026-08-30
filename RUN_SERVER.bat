@echo off
chcp 65001 >nul
set PYTHONIOENCODING=utf-8
title Let's Play Host - Universal Server (7.00 - 13.00)
cd /d "%~dp0"
cls

echo ===================================================================
echo               LET'S PLAY - PS4 EXPLOIT HOST (7.00 - 13.00)
echo         Universal Exploit Suite for PS4 ^| Ahmed Elattar
echo ===================================================================
echo.
echo Starting local HTTP server for PS4...
echo.

set "PY_CMD="

where python >nul 2>nul
if %errorlevel% equ 0 (
    set "PY_CMD=python"
    goto run
)

where py >nul 2>nul
if %errorlevel% equ 0 (
    set "PY_CMD=py"
    goto run
)

if exist "C:\Python312\python.exe" (
    set "PY_CMD=C:\Python312\python.exe"
    goto run
)

if exist "C:\Program Files\Python312\python.exe" (
    set "PY_CMD=C:\Program Files\Python312\python.exe"
    goto run
)

if exist "%LOCALAPPDATA%\Programs\Python\Python312\python.exe" (
    set "PY_CMD=%LOCALAPPDATA%\Programs\Python\Python312\python.exe"
    goto run
)

echo [X] Python is required to run the local server!
echo     Please install Python 3 from https://www.python.org/
echo.
pause
exit /b 1

:run
"%PY_CMD%" server.py

echo.
echo ===================================================================
echo  [!] Server has been stopped.
echo ===================================================================
pause
