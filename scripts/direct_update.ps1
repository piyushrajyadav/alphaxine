Write-Host "Directly updating text colors in specific approach pages..." -ForegroundColor Green

# Define the target files
$targetFiles = @(
    "app/approach/strategy-methodology/page.tsx",
    "app/approach/implementation-methodology/page.tsx"
)

foreach ($file in $targetFiles) {
    if (Test-Path $file) {
        $content = Get-Content -Path $file -Raw
        
        # Replace text colors
        $content = $content -replace 'text-gray-600', 'text-red-400'
        $content = $content -replace 'text-blue-500', 'text-red-600'
        $content = $content -replace 'text-blue-600', 'text-red-600'
        $content = $content -replace 'text-indigo-600', 'text-red-600'
        
        # Save the file
        Set-Content -Path $file -Value $content
        Write-Host "Updated text colors in $file" -ForegroundColor Yellow
    } else {
        Write-Host "File not found: $file" -ForegroundColor Red
    }
}

Write-Host "Direct update completed!" -ForegroundColor Green 