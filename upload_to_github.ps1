<#
.SYNOPSIS
    Let's Play Host - GitHub Uploader Script (PowerShell) - Universal 7.00 - 13.00
.DESCRIPTION
    Automates git initialization, commit, and push to your GitHub repository for Ahmed Elattar.
#>

[CmdletBinding()]
param (
    [string]$RepoUrl = "https://github.com/LetsPlay-ps/aio.git"
)

Clear-Host
Write-Host "===================================================================" -ForegroundColor Cyan
Write-Host "               LET'S PLAY - GITHUB UPLOAD WIZARD                   " -ForegroundColor Cyan
Write-Host "         PS4 Exploit Host FW 7.00 - 13.00 | Ahmed Elattar          " -ForegroundColor DarkCyan
Write-Host "===================================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Check repo URL
if ([string]::IsNullOrWhiteSpace($RepoUrl)) {
    Write-Host "[?] Enter your GitHub repository URL:" -ForegroundColor Yellow
    Write-Host "    (Default: https://github.com/LetsPlay-ps/aio.git)" -ForegroundColor DarkGray
    $inputUrl = Read-Host ">> GitHub URL"
    if (-not [string]::IsNullOrWhiteSpace($inputUrl)) {
        $RepoUrl = $inputUrl.Trim()
    } else {
        $RepoUrl = "https://github.com/LetsPlay-ps/aio.git"
    }
}

Write-Host "`n[*] Target Repository: $RepoUrl" -ForegroundColor Green

# 2. Check for Git
$gitCmd = "git"
$gitCheck = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitCheck) {
    $potentialPaths = @(
        "C:\Program Files\Git\cmd\git.exe",
        "C:\Program Files (x86)\Git\cmd\git.exe",
        "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe"
    )
    foreach ($p in $potentialPaths) {
        if (Test-Path $p) {
            $gitCmd = $p
            break
        }
    }
}

try {
    & $gitCmd --version | Out-Null
} catch {
    Write-Host "[X] Git is not found on your system!" -ForegroundColor Red
    Write-Host "    Please download and install Git: https://git-scm.com/download/win" -ForegroundColor Yellow
    pause
    exit 1
}

Write-Host "[✔] Git is ready." -ForegroundColor Green

# 3. Git Operations
if (-not (Test-Path ".git")) {
    Write-Host "[*] Initializing Git repository..." -ForegroundColor Cyan
    & $gitCmd init
}

$userName = & $gitCmd config user.name
if (-not $userName) {
    & $gitCmd config user.name "Ahmed Elattar"
    & $gitCmd config user.email "ahmed.elattar@example.com"
}

Write-Host "[*] Staging files..." -ForegroundColor Cyan
& $gitCmd add .

Write-Host "[*] Creating commit..." -ForegroundColor Cyan
& $gitCmd commit -m "Upload Let's Play Multi-Firmware Host 7.00 - 13.00 by Ahmed Elattar"

Write-Host "[*] Setting branch to main..." -ForegroundColor Cyan
& $gitCmd branch -M main

Write-Host "[*] Configuring remote origin..." -ForegroundColor Cyan
& $gitCmd remote remove origin 2>$null
& $gitCmd remote add origin $RepoUrl

Write-Host "`n[*] Pushing to GitHub (Branch: main)..." -ForegroundColor Magenta
& $gitCmd push -u origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "[!] Standard push failed. Trying with force push (--force)..." -ForegroundColor Yellow
    & $gitCmd push -u origin main --force
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n===================================================================" -ForegroundColor Green
    Write-Host "  [✔] SUCCESS! Project uploaded to GitHub successfully!" -ForegroundColor Green
    Write-Host "  [✔] تم رفع المشروع بنجاح إلى حسابك على جيت هب!" -ForegroundColor Green
    Write-Host "===================================================================" -ForegroundColor Green
} else {
    Write-Host "`n[X] Push encountered an issue. Please verify your credentials/token." -ForegroundColor Red
}

Write-Host ""
