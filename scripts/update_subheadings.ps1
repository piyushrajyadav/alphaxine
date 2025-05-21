Write-Host "Updating subheading text colors to red for better visibility..." -ForegroundColor Green

# Get all the page.tsx files in the specified directories
$allPages = Get-ChildItem -Path "app/company", "app/approach", "app/services", "app/industries", "app/products" -Recurse -Filter "page.tsx" -ErrorAction SilentlyContinue
$totalFiles = 0
$updatedFiles = 0

foreach ($page in $allPages) {
    # Skip files in [slug] directories
    if ($page.FullName -like "*\[slug]*") {
        continue
    }
    
    $totalFiles++
    $fileChanged = $false
    $content = Get-Content -Path $page.FullName -Raw
    $originalContent = $content
    
    # Update subheading text colors
    $patterns = @(
        @{ From = 'text-xl text-gray-600'; To = 'text-xl text-red-400' },
        @{ From = 'text-xl mb-2 text-gray-600'; To = 'text-xl mb-2 text-red-400' },
        @{ From = 'text-lg text-gray-600'; To = 'text-lg text-red-400' },
        @{ From = 'text-md text-gray-600'; To = 'text-md text-red-400' },
        @{ From = 'font-medium text-gray-600'; To = 'font-medium text-red-400' },
        @{ From = 'font-medium mb-4 text-gray-600'; To = 'font-medium mb-4 text-red-400' },
        @{ From = '<p className="text-xl text-gray-600">'; To = '<p className="text-xl text-red-400">' },
        @{ From = '<p className="text-xl text-gray-500">'; To = '<p className="text-xl text-red-400">' },
        @{ From = '<p className="text-gray-600">'; To = '<p className="text-red-400">' },
        @{ From = '<ul className="space-y-3 text-gray-600">'; To = '<ul className="space-y-3 text-red-400">' },
        @{ From = ' text-gray-600"'; To = ' text-red-400"' },
        @{ From = 'text-gray-600 '; To = 'text-red-400 ' },
        @{ From = '"text-gray-600"'; To = '"text-red-400"' }
    )
    
    foreach ($pattern in $patterns) {
        if ($content -match [regex]::Escape($pattern.From)) {
            $content = $content -replace [regex]::Escape($pattern.From), $pattern.To
            $fileChanged = $true
            Write-Host "  Applied pattern: $($pattern.From) -> $($pattern.To)" -ForegroundColor Cyan
        }
    }
    
    # Direct update for digital-transformation page
    if ($page.FullName -like "*digital-transformation*") {
        $content = $content -replace '<p className="text-gray-600">', '<p className="text-red-400">'
        
        # Explicitly handle the approach pages which have different patterns
        $content = $content -replace '<ul className="space-y-3 text-gray-600">', '<ul className="space-y-3 text-red-400">'
        
        Write-Host "  Applied special patterns for digital-transformation page" -ForegroundColor Magenta
        $fileChanged = $true
    }
    
    # Only save if file was changed
    if ($fileChanged -and ($content -ne $originalContent)) {
        Set-Content -Path $page.FullName -Value $content
        $updatedFiles++
        Write-Host "Updated subheadings in $($page.FullName)" -ForegroundColor Yellow
    }
}

Write-Host "Subheading text color update completed! Updated $updatedFiles out of $totalFiles files." -ForegroundColor Green

# Check for remaining text-gray-600 in the digital-transformation page
$dtPage = "app/approach/digital-transformation/page.tsx"
if (Test-Path $dtPage) {
    $remainingGrayCount = (Select-String -Path $dtPage -Pattern "text-gray-600").Count
    Write-Host "Remaining text-gray-600 occurrences in digital-transformation page: $remainingGrayCount" -ForegroundColor Cyan
} 