Write-Host "Updating company pages with red text for better visibility..." -ForegroundColor Green

# Get all company pages
$companyPages = Get-ChildItem -Path "app/company" -Recurse -Filter "page.tsx"
$updatedCount = 0

foreach ($page in $companyPages) {
    $content = Get-Content -Path $page.FullName -Raw
    $originalContent = $content
    
    # Replace all text colors
    $content = $content -replace 'text-gray-600', 'text-red-400'
    $content = $content -replace 'text-gray-700', 'text-red-400'
    $content = $content -replace 'text-blue-500', 'text-red-600'
    $content = $content -replace 'text-blue-600', 'text-red-600'
    $content = $content -replace 'text-indigo-600', 'text-red-600'
    
    # Save the file if changes were made
    if ($content -ne $originalContent) {
        Set-Content -Path $page.FullName -Value $content
        $updatedCount++
        Write-Host "Updated text colors in $($page.FullName)" -ForegroundColor Yellow
    }
}

Write-Host "Company pages update completed! Updated $updatedCount pages." -ForegroundColor Green 