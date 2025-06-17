# cursor.ps1 －－ Stream Deck 用
$ErrorActionPreference = 'Stop'
# スクリプトと同じフォルダへ
Set-Location $PSScriptRoot

$cmd  = "ghq list -p | sort | fzf | xargs -I{} bash -c 'cd {} && cursor .'"
& "$env:SystemRoot\System32\wsl.exe" -d Arch -- bash -c $cmd
