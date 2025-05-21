Write-Host "Ensuring gray backgrounds on all company and approach pages..." -ForegroundColor Green

# Target directories
$targetDirs = @(
    "app/company",
    "app/approach"
)

foreach ($dir in $targetDirs) {
    $pages = Get-ChildItem -Path $dir -Recurse -Filter "page.tsx"
    
    foreach ($page in $pages) {
        Write-Host "Checking $($page.FullName)..." -ForegroundColor Cyan
        $content = Get-Content -Path $page.FullName -Raw
        $originalContent = $content
        
        # Ensure background is gray, not white
        $content = $content -replace 'bg-white', 'bg-gray-50'
        
        # Ensure main wrapper div has gray background
        if ($content -match "<BackgroundFix>") {
            $content = $content -replace '(<BackgroundFix>[\s\n]*<div)(?! className="bg-gray-50")', '$1 className="bg-gray-50"'
        } else {
            # Add BackgroundFix wrapper if it doesn't exist
            if (-not ($content -match "import BackgroundFix")) {
                $content = "import BackgroundFix from '@/app/components/Layout/BackgroundFix';" + [Environment]::NewLine + $content
            }
            
            # Wrap the main content with BackgroundFix
            $content = $content -replace '(<div)', '<BackgroundFix>$1 className="bg-gray-50"'
            $content = $content -replace '(</div>\s*;\s*}\s*)$', '$1</BackgroundFix>'
        }
        
        # Save the file if changes were made
        if ($content -ne $originalContent) {
            Set-Content -Path $page.FullName -Value $content
            Write-Host "  Updated $($page.FullName) with gray backgrounds" -ForegroundColor Yellow
        } else {
            Write-Host "  No changes needed for $($page.FullName)" -ForegroundColor Green
        }
    }
}

Write-Host "Gray background updates completed!" -ForegroundColor Green 