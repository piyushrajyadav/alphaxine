Write-Host "Updating background colors in company and approach pages..." -ForegroundColor Green

# Replace white backgrounds with gray in company pages
$companyPages = Get-ChildItem -Path "app/company" -Recurse -Filter "page.tsx"
foreach ($page in $companyPages) {
    $content = Get-Content -Path $page.FullName -Raw
    
    # Replace section with white backgrounds
    $content = $content -replace 'section className="py-20 bg-white"', 'section className="py-20 bg-gray-50"'
    $content = $content -replace 'section className="py-16 bg-white"', 'section className="py-16 bg-gray-50"'
    $content = $content -replace '<div className="bg-white', '<div className="bg-gray-50'
    $content = $content -replace 'className="bg-white p-', 'className="bg-gray-50 p-'
    $content = $content -replace 'className="bg-white rounded', 'className="bg-gray-50 rounded'
    $content = $content -replace 'className="bg-white border', 'className="bg-gray-50 border'
    
    # Preserve white backgrounds for buttons/links
    # They need to remain white for contrast against colored backgrounds
    
    # Save the file
    Set-Content -Path $page.FullName -Value $content
    Write-Host "Updated $($page.FullName)" -ForegroundColor Yellow
}

# Replace white backgrounds with gray in approach pages
$approachPages = Get-ChildItem -Path "app/approach" -Recurse -Filter "page.tsx"
foreach ($page in $approachPages) {
    $content = Get-Content -Path $page.FullName -Raw
    
    # Replace section with white backgrounds
    $content = $content -replace '<div className="bg-white">', '<div className="bg-gray-50">'
    $content = $content -replace '<div className="bg-white ', '<div className="bg-gray-50 '
    $content = $content -replace 'className="bg-white p-', 'className="bg-gray-50 p-'
    $content = $content -replace 'className="bg-white rounded', 'className="bg-gray-50 rounded'
    $content = $content -replace 'section className="py-16 bg-white"', 'section className="py-16 bg-gray-50"'
    
    # Save the file
    Set-Content -Path $page.FullName -Value $content
    Write-Host "Updated $($page.FullName)" -ForegroundColor Yellow
}

# Check for any remaining bg-white instances in sections
Write-Host "Checking for remaining bg-white instances in sections..." -ForegroundColor Yellow
$companySections = Select-String -Path "app/company/*/*.tsx" -Pattern "section.*bg-white"
$approachSections = Select-String -Path "app/approach/*/*.tsx" -Pattern "section.*bg-white"

if ($companySections -or $approachSections) {
    Write-Host "Warning: Some white background sections remain:" -ForegroundColor Red
    
    if ($companySections) {
        Write-Host "Company pages:" -ForegroundColor Red
        $companySections | ForEach-Object { Write-Host "  $_" }
    }
    
    if ($approachSections) {
        Write-Host "Approach pages:" -ForegroundColor Red
        $approachSections | ForEach-Object { Write-Host "  $_" }
    }
} else {
    Write-Host "All white background sections have been replaced!" -ForegroundColor Green
}

# Count remaining div bg-white instances (excluding buttons/links)
$divWhiteCount = (Select-String -Path "app/company/*/*.tsx", "app/approach/*/*.tsx" -Pattern "<div.*bg-white").Count
Write-Host "Remaining white background divs: $divWhiteCount" -ForegroundColor Yellow

Write-Host "Background update completed!" -ForegroundColor Green
