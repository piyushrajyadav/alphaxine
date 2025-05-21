Write-Host "Applying final fixes - ensuring text is black by default, red only on gray backgrounds..." -ForegroundColor Green

# Target specific pages
$specificPages = @(
    "app/company/about-us/page.tsx",
    "app/company/leadership/page.tsx",
    "app/company/mission-vision/page.tsx",
    "app/company/partners/page.tsx",
    "app/company/presence/page.tsx",
    "app/company/certifications/page.tsx",
    "app/company/credentials/page.tsx",
    "app/company/journey/page.tsx",
    "app/approach/page.tsx",
    "app/approach/digital-transformation/page.tsx",
    "app/approach/implementation-methodology/page.tsx",
    "app/approach/strategy-methodology/page.tsx"
)

foreach ($page in $specificPages) {
    if (Test-Path $page) {
        Write-Host "Applying final fixes to $page..." -ForegroundColor Cyan
        $content = Get-Content -Path $page -Raw
        
        # Step 1: First reset ALL text to black 
        $content = $content -replace 'text-red-\d+', 'text-black'
        $content = $content -replace 'text-gray-\d+', 'text-black'
        $content = $content -replace 'text-blue-\d+', 'text-black'
        
        # Step 2: Make text red ONLY when in a gray background section
        
        # Match h1, h2, h3 inside ANY element with bg-gray class
        $content = $content -replace '(<[^>]*bg-gray-\d+[^>]*>(?:(?!<\/div>).)*?<h[123][^>]*)(text-black|>)', '$1 class="text-red-600">'
        
        # Match p tags inside ANY element with bg-gray class
        $content = $content -replace '(<[^>]*bg-gray-\d+[^>]*>(?:(?!<\/div>).)*?<p[^>]*)(text-black|>)', '$1 class="text-red-400">'
        
        # Fix any className attributes
        $content = $content -replace 'class="', 'className="'
        
        # Fix any duplicate className attributes
        $content = $content -replace '(className="[^"]*?)"\s+className="([^"]*?")', '$1 $2'
        
        # Save the updated file
        Set-Content -Path $page -Value $content
        Write-Host "  Updated $page" -ForegroundColor Yellow
    } else {
        Write-Host "  File not found: $page" -ForegroundColor Red
    }
}

Write-Host "Final color fixes completed!" -ForegroundColor Green 