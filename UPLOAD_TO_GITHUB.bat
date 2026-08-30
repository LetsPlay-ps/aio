@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion
title Let's Play - Upload to GitHub (7.00 - 13.00)
cd /d "%~dp0"
cls

echo ===================================================================
echo               LET'S PLAY - GITHUB UPLOAD WIZARD
echo         PS4 Multi-Firmware Host (7.00 - 13.00) ^| Ahmed Elattar
echo ===================================================================
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0upload_to_github.ps1"
if %errorlevel% neq 0 (
    echo.
    echo Script finished with exit code %errorlevel%.
)
pause
