/**
 * Script to add force-gray-bg class to specific pages only
 */

const fs = require('fs');
const path = require('path');

// ONLY the specific pages requested by the user
const pagesToUpdate = [
  // Company Pages
  'app/company/about-us/page.tsx',
  'app/company/leadership/page.tsx',
  'app/company/mission-vision/page.tsx',
  'app/company/journey/page.tsx', 
  'app/company/certifications/page.tsx',
  'app/company/partners/page.tsx',
  
  // Specific Service Pages
  'app/services/consulting/page.tsx',
  'app/services/enterprise-applications/page.tsx',
  'app/services/data-analytics/page.tsx',
  'app/services/automation-ai/page.tsx',
  'app/services/business-process-outsourcing/page.tsx',
  'app/services/intelligent-marketing/page.tsx',
  
  // Products & Industries
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
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Check if the file already has the force-gray-bg class
  if (content.includes('force-gray-bg')) {
    console.log(`File ${filePath} already has force-gray-bg class.`);
    return false;
  }
  
  // Find the main content div after BackgroundFix
  const mainDivRegex = /<BackgroundFix>[\s\n]*<div[^>]*className="([^"]*)"/;
  if (mainDivRegex.test(content)) {
    content = content.replace(mainDivRegex, (match, className) => {
      // Add the force-gray-bg class to the existing classes
      return match.replace(`className="${className}"`, `className="${className} force-gray-bg"`);
    });
    modified = true;
  } else {
    // If not found, wrap the main content in a div with force-gray-bg
    const backgroundFixRegex = /<BackgroundFix>[\s\n]*/;
    if (backgroundFixRegex.test(content)) {
      content = content.replace(backgroundFixRegex, (match) => {
        return `${match}<div className="force-gray-bg">`;
      });
      
      // Add closing div before </BackgroundFix>
      content = content.replace(/<\/BackgroundFix>/g, '</div>\n      </BackgroundFix>');
      modified = true;
    }
  }
  
  // Remove any explicit bg classes that might conflict
  content = content.replace(/className="([^"]*)bg-white([^"]*)"/g, 'className="$1$2"');
  content = content.replace(/className="([^"]*)bg-gray-\d+([^"]*)"/g, 'className="$1$2"');
  
  // Clean up any double spaces in className
  content = content.replace(/className="([^"]*)\s{2,}([^"]*)"/g, 'className="$1 $2"');
  content = content.replace(/className="\s+/g, 'className="');
  content = content.replace(/\s+"/g, '"');
  
  // Save the file if modified
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath} successfully.`);
    return true;
  }
  
  console.log(`No changes needed for ${filePath}`);
  return false;
}

// Main function
function main() {
  console.log("Adding force-gray-bg class to specific pages...");
  
  let updatedCount = 0;
  
  pagesToUpdate.forEach(file => {
    try {
      const updated = processFile(file);
      if (updated) {
        updatedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  });
  
  console.log(`Completed! Updated ${updatedCount} files.`);
}

// Run the script
main(); 