# Get all TypeScript files with the pt-20 class
$files = Get-ChildItem -Path "app" -Recurse -Include "*.tsx" | Select-String -Pattern "className=`"pt-20`"" | Select-Object Path -Unique

# Process each file
foreach ($file in $files) {
    $filePath = $file.Path
    Write-Host "Processing $filePath"
    
    # Read the file content
    $content = Get-Content -Path $filePath -Raw
    
    # Replace the pt-20 class with an empty string
    $newContent = $content -replace 'className="pt-20"', 'className=""'
    
    # Clean up any empty className attributes
    $newContent = $newContent -replace 'className=""', ''
    
    # Restore any needed className attributes
    $newContent = $newContent -replace '<div>', '<div>'
    
    # Write the content back to the file
    Set-Content -Path $filePath -Value $newContent
    
    Write-Host "Fixed $filePath"
}

Write-Host "All files processed successfully!" 