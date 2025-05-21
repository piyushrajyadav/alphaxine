Write-Host "Performing final check on approach pages..." -ForegroundColor Green

$approachPages = @(
    "app/approach/digital-transformation/page.tsx",
    "app/approach/implementation-methodology/page.tsx",
    "app/approach/strategy-methodology/page.tsx"
)

foreach ($page in $approachPages) {
    if (Test-Path $page) {
        Write-Host "Checking $page..." -ForegroundColor Cyan
        
        # Check for gray backgrounds
        $grayCount = (Select-String -Path $page -Pattern "bg-gray" | Measure-Object).Count
        Write-Host "  Gray background elements: $grayCount" -ForegroundColor Yellow
        
        # Check for red text on gray backgrounds
        $redTextCount = (Select-String -Path $page -Pattern "text-red" | Measure-Object).Count
        Write-Host "  Red text elements: $redTextCount" -ForegroundColor Yellow
        
        # Check for any remaining text-gray
        $remainingGrayText = (Select-String -Path $page -Pattern "text-gray" | Measure-Object).Count
        
        if ($remainingGrayText -gt 0) {
            Write-Host "  WARNING: Still found $remainingGrayText gray text elements" -ForegroundColor Red
            
            # One final attempt to fix gray text on these pages
            $content = Get-Content -Path $page -Raw
            $content = $content -replace 'text-gray-\d+', 'text-red-400'
            Set-Content -Path $page -Value $content
            Write-Host "  Attempted to fix remaining gray text" -ForegroundColor Yellow
        } else {
            Write-Host "  No gray text found - all is converted to red ✓" -ForegroundColor Green
        }
        
        # Check for BackgroundFix
        if ((Select-String -Path $page -Pattern "BackgroundFix").Count -gt 0) {
            Write-Host "  BackgroundFix wrapper present ✓" -ForegroundColor Green
        } else {
            Write-Host "  WARNING: BackgroundFix not found" -ForegroundColor Red
        }
    } else {
        Write-Host "  File not found: $page" -ForegroundColor Red
    }
}

Write-Host "Final check completed." -ForegroundColor Green 