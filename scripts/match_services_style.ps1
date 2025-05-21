Write-Host "Making all pages match 'Our Services' style with gray backgrounds..." -ForegroundColor Green

# First, check a service page to understand its structure
$servicePagePath = "app/services/data-analytics/data-lake/page.tsx"
if (Test-Path $servicePagePath) {
    $serviceContent = Get-Content -Path $servicePagePath -Raw
    Write-Host "Found service page to use as template" -ForegroundColor Green
}

# Target directories for updates
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
        
        # First make sure BackgroundFix is used
        if (-not ($content -match "BackgroundFix")) {
            $content = $content -replace "<div", "<BackgroundFix><div" 
            $content = $content -replace "</div>(\s*)}$", "</div></BackgroundFix>$1}"
            
            # Add import if needed
            if (-not ($content -match "import BackgroundFix")) {
                $content = "import BackgroundFix from '@/app/components/Layout/BackgroundFix';" + [Environment]::NewLine + $content
            }
        }
        
        # Make sure all white backgrounds are replaced with gray
        $content = $content -replace 'section className="py-20 bg-white"', 'section className="py-20 bg-gray-50"'
        $content = $content -replace 'section className="py-16 bg-white"', 'section className="py-16 bg-gray-50"'
        $content = $content -replace 'section className="py-12 bg-white"', 'section className="py-12 bg-gray-50"'
        $content = $content -replace 'className="bg-white p-', 'className="bg-gray-50 p-'
        $content = $content -replace 'className="bg-white rounded', 'className="bg-gray-50 rounded'
        $content = $content -replace '<div className="bg-white">', '<div className="bg-gray-50">'
        $content = $content -replace 'className="bg-white ', 'className="bg-gray-50 '
        
        # Update root div to have gray background
        $content = $content -replace '<div((?:(?!className).)*?)>', '<div$1 className="bg-gray-50">'
        
        # Only change heading text to red when on gray backgrounds
        $content = $content -replace '(<div[^>]*bg-gray-\d+[^>]*>.*?<h[123][^>]*?)(text-gray-[6-9]00|text-black)([^>]*?>)', '$1text-red-600$3'
        
        # Change subheadings on gray backgrounds
        $content = $content -replace '(<div[^>]*bg-gray-\d+[^>]*>.*?<p[^>]*?)(text-gray-[5-6]00)([^>]*?>)', '$1text-red-400$3'
        
        # Save the file if changed
        if ($content -ne $originalContent) {
            Set-Content -Path $page.FullName -Value $content
            $updatedCount++
            Write-Host "Updated $($page.FullName) to match service pages styling" -ForegroundColor Yellow
        }
    }
}

# Apply direct fixes to specific pages we know need attention
$specificFiles = @(
    "app/company/about-us/page.tsx",
    "app/company/leadership/page.tsx",
    "app/company/mission-vision/page.tsx",
    "app/approach/digital-transformation/page.tsx",
    "app/approach/strategy-methodology/page.tsx",
    "app/approach/implementation-methodology/page.tsx"
)

foreach ($file in $specificFiles) {
    if (Test-Path $file) {
        Write-Host "Applying specific fixes to $file" -ForegroundColor Cyan
        $content = Get-Content -Path $file -Raw
        
        # Make sure bg-white is replaced with bg-gray-50
        $content = $content -replace '"bg-white"', '"bg-gray-50"'
        $content = $content -replace "'bg-white'", "'bg-gray-50'"
        
        # Fix any div with bg-white class
        $content = $content -replace '<div className="bg-white', '<div className="bg-gray-50'
        
        # Turn headings on gray sections to red
        $content = $content -replace '(<h[123][^>]*?)>([^<]*?)<', '$1 className="text-red-600">$2<'
        
        # Update paragraphs in sections with gray background
        $content = $content -replace '(<section[^>]*bg-gray-\d+[^>]*>.*?<p[^>]*)(text-gray-\d+)([^>]*>)', '$1text-red-400$3'
        
        # Ensure main div has gray background
        $content = $content -replace '<div>', '<div className="bg-gray-50">'
        
        Set-Content -Path $file -Value $content
        Write-Host "Direct fix applied to $file" -ForegroundColor Yellow
    }
}

Write-Host "Styles updated! Modified $updatedCount pages and applied specific fixes." -ForegroundColor Green 