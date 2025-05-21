/**
 * Script to fix duplicate bg-gray-50 classes
 */

const fs = require('fs');
const path = require('path');

// Pages to check and fix
const pagesToFix = [
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
  console.log(`Checking ${filePath} for duplicate classes...`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix duplicate bg-gray-50 classes
  const originalContent = content;
  
  // Replace duplicate bg-gray-50 classes
  content = content.replace(/bg-gray-50\s+bg-gray-50/g, 'bg-gray-50');
  
  // Replace duplicate className attributes
  content = content.replace(/(className="[^"]*)"(\s+)className="([^"]*?)"/g, '$1 $3"');
  
  // Clean up possible extra spaces in classNames
  content = content.replace(/className="([^"]*)  ([^"]*)"/g, 'className="$1 $2"');
  
  // Only save if changes were made
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed duplicate classes in ${filePath}`);
  } else {
    console.log(`No duplicate classes found in ${filePath}`);
  }
}

// Main function
function main() {
  console.log("Checking for and fixing duplicate bg-gray-50 classes...");
  
  let fixedCount = 0;
  let checkedCount = 0;
  
  pagesToFix.forEach(file => {
    try {
      const originalContent = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
      
      if (originalContent) {
        processFile(file);
        
        // Check if the file was actually modified
        const newContent = fs.readFileSync(file, 'utf8');
        if (newContent !== originalContent) {
          fixedCount++;
        }
        
        checkedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  });
  
  console.log(`Completed! Checked ${checkedCount} files, fixed ${fixedCount} files with duplicate classes.`);
}

// Run the script
main(); 