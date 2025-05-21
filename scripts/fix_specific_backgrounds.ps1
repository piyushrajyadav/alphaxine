Write-Host "Updating backgrounds to gray and text to red only on gray backgrounds..." -ForegroundColor Green

# Target directories
$targetDirs = @(
    "app/company",
    "app/approach"
)

$updatedCount = 0

foreach ($dir in $targetDirs) {
    $pages = Get-ChildItem -Path $dir -Recurse -Filter "page.tsx"
    
    foreach ($page in $pages) {
        $content = Get-Content -Path $page.FullName -Raw
        $originalContent = $content
        
        # First, replace all white backgrounds with gray
        $content = $content -replace 'section className="py-20 bg-white"', 'section className="py-20 bg-gray-50"'
        $content = $content -replace 'section className="py-16 bg-white"', 'section className="py-16 bg-gray-50"'
        $content = $content -replace '<div className="bg-white">', '<div className="bg-gray-50">'
        $content = $content -replace '<div className="bg-white ', '<div className="bg-gray-50 '
        
        # Only target text within gray background sections to make red
        # Text in headers of gray backgrounds
        $content = $content -replace '(<section[^>]*bg-gray-\d+[^>]*>.*?<h[1-6][^>]*)(text-gray-\d+|text-black)([^>]*>)', '$1text-red-600$3'
        
        # Text in paragraphs of gray backgrounds
        $content = $content -replace '(<section[^>]*bg-gray-\d+[^>]*>.*?<p[^>]*)(text-gray-\d+)([^>]*>)', '$1text-red-400$3'
        
        # Card titles in gray backgrounds
        $content = $content -replace '(<div[^>]*bg-gray-\d+[^>]*>.*?<h[1-6][^>]*)(text-gray-\d+|text-black)([^>]*>)', '$1text-red-600$3'
        
        # Save the file if changed
        if ($content -ne $originalContent) {
            Set-Content -Path $page.FullName -Value $content
            $updatedCount++
            Write-Host "Updated backgrounds and text in $($page.FullName)" -ForegroundColor Yellow
        }
    }
}

Write-Host "Created a direct update for specific files..." -ForegroundColor Green

# Direct update for specific files that need more targeted changes
$specificFiles = @(
    "app/approach/digital-transformation/page.tsx",
    "app/approach/strategy-methodology/page.tsx",
    "app/approach/implementation-methodology/page.tsx",
    "app/company/about-us/page.tsx",
    "app/company/leadership/page.tsx"
)

foreach ($file in $specificFiles) {
    if (Test-Path $file) {
        $content = Get-Content -Path $file -Raw
        
        # Make sure background is gray
        $content = $content -replace 'className="bg-white"', 'className="bg-gray-50"'
        $content = $content -replace '"bg-white ', '"bg-gray-50 '
        
        # Change text on gray backgrounds to red
        if ($file -like "*digital-transformation*") {
            # We know this page has gray backgrounds, so update remaining text
            $content = $content -replace 'text-gray-600', 'text-red-400'
            $content = $content -replace 'text-blue-100', 'text-red-100'
        }
        
        Set-Content -Path $file -Value $content
        Write-Host "Directly updated $file" -ForegroundColor Yellow
    }
}

Write-Host "Update completed! Updated $updatedCount pages and specific target files." -ForegroundColor Green 