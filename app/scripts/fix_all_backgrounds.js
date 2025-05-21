/**
 * Script to fix all background colors and text styling
 * This is a more comprehensive version that ensures all pages have gray backgrounds
 */

const fs = require('fs');
const path = require('path');

// Pages to update
const pagesToUpdate = [
  // Company Pages
  'app/company/about-us/page.tsx',
  'app/company/leadership/page.tsx',
  'app/company/mission-vision/page.tsx',
  'app/company/journey/page.tsx',
  'app/company/certifications/page.tsx',
  'app/company/partners/page.tsx',
  
  // Service Pages
  'app/services/consulting/page.tsx',
  'app/services/consulting/it-strategy/page.tsx',
  'app/services/consulting/ai-strategy/page.tsx',
  'app/services/enterprise-applications/page.tsx',
  'app/services/data-analytics/page.tsx',
  'app/services/automation-ai/page.tsx',
  'app/services/business-process-outsourcing/page.tsx',
  'app/services/intelligent-marketing/page.tsx',
  
  // Products & Solutions - handled via industries
  
  // Industries
  'app/industries/healthcare-education/page.tsx',
  'app/industries/it-ites/page.tsx',
  'app/industries/manufacturing/page.tsx',
  'app/industries/retail-logistics/page.tsx',
  
  // Approach
  'app/approach/digital-transformation/page.tsx',
  'app/approach/strategy-methodology/page.tsx',
  'app/approach/implementation-methodology/page.tsx',
];

// Process a single file
function processFile(filePath) {
  console.log(`Processing ${filePath}...`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Step 1: Fix background colors
  content = content.replace(/bg-white/g, 'bg-gray-50');
  
  // Step 2: Make sure we have proper BackgroundFix setup
  if (!content.includes('BackgroundFix')) {
    // Add the import if needed
    if (!content.includes("import BackgroundFix")) {
      content = content.replace(/(import.*from.*['"].*['"];)/, 
        "$1\nimport BackgroundFix from '@/app/components/Layout/BackgroundFix';");
    }
    
    // Add the BackgroundFix wrapper
    content = content.replace(/(return\s*\()/, "$1\n      <BackgroundFix>");
    content = content.replace(/(\);[\s\n]*}\s*$)/, "\n      </BackgroundFix>$1");
  }
  
  // Step 3: Ensure the main div has bg-gray-50
  content = content.replace(/<BackgroundFix>[\s\n]*<div(?! className="[^"]*bg-gray-50[^"]*")/g, 
    '<BackgroundFix>\n      <div className="bg-gray-50"');
  
  // Fix cases where the div already has a className but not bg-gray-50
  content = content.replace(/<BackgroundFix>[\s\n]*<div className="([^"]*)"(?![^>]*bg-gray-50)/g, 
    '<BackgroundFix>\n      <div className="$1 bg-gray-50"');
  
  // Step 4: Update all section backgrounds to bg-gray-50
  content = content.replace(/<section[^>]*className="([^"]*)"([^>]*)>/g, (match, className, rest) => {
    if (className.includes('bg-white')) {
      return `<section className="${className.replace('bg-white', 'bg-gray-50')}"${rest}>`;
    } 
    if (!className.includes('bg-gray')) {
      return `<section className="${className} bg-gray-50"${rest}>`;
    }
    return match;
  });
  
  // Step 5: Make headings red
  content = content.replace(/<h([1-3])([^>]*?)>/g, (match, level, attrs) => {
    if (attrs.includes('text-red-600')) return match;
    if (attrs.includes('className="')) {
      return match.replace('className="', 'className="text-red-600 ');
    }
    return `<h${level}${attrs} className="text-red-600">`;
  });
  
  // Step 6: Fix nested divs with bg-white
  content = content.replace(/<div([^>]*?)className="([^"]*bg-white[^"]*)"([^>]*?)>/g, 
    '<div$1className="$2 bg-gray-50"$3>');
  
  // Step 7: Fix duplicate className attributes
  content = content.replace(/(className="[^"]*)"(\s+)className="([^"]*?)"/g, '$1 $3"');
  
  // Step 8: Handle common inline styles that might set white backgrounds
  content = content.replace(/style={{(\s*[^}]*)backgroundColor:\s*['"]white['"]([^}]*)}}/g, 
    'style={{$1backgroundColor: "#f9fafb"$2}}');
  
  // Save the file
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath} successfully.`);
}

// Main function
function main() {
  console.log("Starting background color and text style fixes...");
  
  let successCount = 0;
  let errorCount = 0;
  
  pagesToUpdate.forEach(file => {
    try {
      processFile(file);
      successCount++;
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
      errorCount++;
    }
  });
  
  console.log(`Completed! ${successCount} files updated successfully, ${errorCount} errors.`);
}

// Run the script
main(); 