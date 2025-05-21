Write-Host "Updating text colors - black by default, red only on gray backgrounds..." -ForegroundColor Green

# Target directories and pages
$targetPages = @(
    "app/company/about-us/page.tsx",
    "app/company/leadership/page.tsx",
    "app/company/mission-vision/page.tsx",
    "app/approach/digital-transformation/page.tsx",
    "app/approach/strategy-methodology/page.tsx",
    "app/approach/implementation-methodology/page.tsx"
)

foreach ($page in $targetPages) {
    if (Test-Path $page) {
        Write-Host "Updating $page..." -ForegroundColor Cyan
        $content = Get-Content -Path $page -Raw
        
        # First ensure we have gray backgrounds
        $content = $content -replace 'bg-white', 'bg-gray-50'
        
        # Reset all text to black first
        $content = $content -replace 'text-red-\d+', 'text-black'
        $content = $content -replace 'text-gray-\d+', 'text-black'
        $content = $content -replace 'text-blue-\d+', 'text-black'
        
        # Now make text red ONLY when in gray background sections
        # Headings in gray backgrounds
        $content = $content -replace '(<section[^>]*bg-gray-\d+[^>]*>.*?<h[1-6][^>]*)(text-black)([^>]*>)', '$1text-red-600$3'
        $content = $content -replace '(<div[^>]*bg-gray-\d+[^>]*>.*?<h[1-6][^>]*)(text-black)([^>]*>)', '$1text-red-600$3'
        
        # Paragraphs in gray backgrounds
        $content = $content -replace '(<section[^>]*bg-gray-\d+[^>]*>.*?<p[^>]*)(text-black)([^>]*>)', '$1text-red-400$3'
        $content = $content -replace '(<div[^>]*bg-gray-\d+[^>]*>.*?<p[^>]*)(text-black)([^>]*>)', '$1text-red-400$3'
        
        # List items in gray backgrounds
        $content = $content -replace '(<div[^>]*bg-gray-\d+[^>]*>.*?<li[^>]*)(text-black)([^>]*>)', '$1text-red-400$3'
        $content = $content -replace '(<ul[^>]*>.*?<li[^>]*)(text-black)([^>]*>)', '$1text-red-400$3'
        
        # Save the updated file
        Set-Content -Path $page -Value $content
        Write-Host "  Updated $page" -ForegroundColor Yellow
    } else {
        Write-Host "  File not found: $page" -ForegroundColor Red
    }
}

Write-Host "Text color updates completed - black text by default, red only on gray backgrounds." -ForegroundColor Green 