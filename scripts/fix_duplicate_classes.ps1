Write-Host "Fixing duplicate className attributes in approach pages..." -ForegroundColor Green

$approachPages = @(
    "app/approach/digital-transformation/page.tsx",
    "app/approach/implementation-methodology/page.tsx",
    "app/approach/strategy-methodology/page.tsx"
)

foreach ($page in $approachPages) {
    if (Test-Path $page) {
        Write-Host "Fixing $page..." -ForegroundColor Cyan
        $content = Get-Content -Path $page -Raw
        
        # Fix duplicate className attributes by merging them
        $content = $content -replace '(className="[^"]*?)"(\s+)className="([^"]*?)"', '$1 $3"'
        $content = $content -replace '(className="[^"]*?)"(\s+)className="([^"]*?)"', '$1 $3"'
        $content = $content -replace '(className="[^"]*?)"(\s+)className="([^"]*?)"', '$1 $3"'
        
        # Remove duplicated class names within a single className attribute
        $content = $content -replace '(className="[^"]*?)(text-red-600\s+)(.*?)(text-red-600)([^"]*?")', '$1$2$3$5'
        
        # Save the updated file
        Set-Content -Path $page -Value $content
        Write-Host "  Fixed duplicate className attributes in $page" -ForegroundColor Yellow
    } else {
        Write-Host "  File not found: $page" -ForegroundColor Red
    }
}

Write-Host "Duplicate className fixes completed." -ForegroundColor Green 