Write-Host "Ensuring approach pages match services pages with gray backgrounds and red text..." -ForegroundColor Green

$approachPages = @(
    "app/approach/digital-transformation/page.tsx",
    "app/approach/implementation-methodology/page.tsx",
    "app/approach/strategy-methodology/page.tsx"
)

foreach ($page in $approachPages) {
    if (Test-Path $page) {
        Write-Host "Updating $page..." -ForegroundColor Cyan
        $content = Get-Content -Path $page -Raw
        
        # Make sure we have BackgroundFix wrapper
        if ($content -match "BackgroundFix") {
            Write-Host "  BackgroundFix already present" -ForegroundColor Green
            
            # Ensure main div has bg-gray-50
            $content = $content -replace '(<BackgroundFix>[\s\n]*<div)(?! className="bg-gray-50")', '$1 className="bg-gray-50"'
        } else {
            Write-Host "  Adding BackgroundFix wrapper" -ForegroundColor Yellow
            # Add import at top
            if (-not ($content -match "import BackgroundFix")) {
                $content = "import BackgroundFix from '@/app/components/Layout/BackgroundFix';" + [Environment]::NewLine + $content
            }
            
            # Add wrapper around main content
            $content = $content -replace '(<div)', '<BackgroundFix>$1 className="bg-gray-50"'
            $content = $content -replace '(</div>\s*;\s*}\s*)$', '$1</BackgroundFix>'
        }
        
        # Replace any remaining bg-white with bg-gray-50
        $content = $content -replace 'bg-white', 'bg-gray-50'
        
        # Update h2 and h3 headings to be red
        $content = $content -replace '<h2([^>]*)>', '<h2$1 className="text-red-600">'
        $content = $content -replace '<h3([^>]*)>', '<h3$1 className="text-red-600">'
        
        # Make sure text on gray backgrounds is red
        $content = $content -replace 'text-gray-600', 'text-red-400'
        $content = $content -replace 'text-blue-500', 'text-red-600'
        
        # Fix classes on paragraph tags
        $content = $content -replace '<p className="([^"]*?)text-gray-\d+([^"]*)"', '<p className="$1text-red-400$2"'
        
        # Save the updated file
        Set-Content -Path $page -Value $content
        Write-Host "  Updated $page" -ForegroundColor Yellow
    } else {
        Write-Host "  File not found: $page" -ForegroundColor Red
    }
}

Write-Host "Approach pages updated to have gray backgrounds and red text like services pages." -ForegroundColor Green 