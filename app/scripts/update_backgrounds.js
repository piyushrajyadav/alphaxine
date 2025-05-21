/**
 * Script to update page backgrounds to gray and text to red
 * Run with Node.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const pagesToUpdate = [
  // Company Pages
  '../company/about-us/page.tsx',
  '../company/leadership/page.tsx',
  '../company/mission-vision/page.tsx',
  '../company/journey/page.tsx',
  '../company/certifications/page.tsx',
  '../company/partners/page.tsx',
  
  // Service Pages
  '../services/consulting/page.tsx',
  '../services/consulting/it-strategy/page.tsx',
  '../services/consulting/ai-strategy/page.tsx',
  
  // Products & Solutions - handled via industries
  
  // Industries
  '../industries/healthcare-education/page.tsx',
  '../industries/it-ites/page.tsx',
  '../industries/manufacturing/page.tsx',
  '../industries/retail-logistics/page.tsx',
  
  // Approach
  '../approach/digital-transformation/page.tsx',
  '../approach/strategy-methodology/page.tsx',
  '../approach/implementation-methodology/page.tsx',
];

// Updates to make
const updates = [
  {
    // Change white backgrounds to gray
    find: /bg-white/g,
    replace: 'bg-gray-50'
  },
  {
    // Ensure BackgroundFix wrapper has gray background
    find: /<BackgroundFix>[\s\n]*<div(?! className="bg-gray-50")/g,
    replace: '<BackgroundFix>\n      <div className="bg-gray-50"'
  },
  {
    // Make headings red
    find: /<h([1-3])([^>]*?)>/g,
    replace: (match, level, attrs) => {
      if (attrs.includes('text-red-600')) return match;
      return `<h${level}${attrs} className="text-red-600">`;
    }
  },
  {
    // Fix duplicate className attributes
    find: /(className="[^"]*?)"(\s+)className="([^"]*?)"/g,
    replace: '$1 $3"'
  }
];

async function updateFile(filePath) {
  try {
    const fullPath = path.resolve(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${fullPath}`);
      return;
    }
    
    console.log(`Updating ${filePath}...`);
    let content = await readFileAsync(fullPath, 'utf8');
    
    // Apply all updates
    updates.forEach(update => {
      content = content.replace(update.find, update.replace);
    });
    
    await writeFileAsync(fullPath, content);
    console.log(`Updated ${filePath} successfully.`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

async function main() {
  console.log('Starting background and text color updates...');
  
  for (const filePath of pagesToUpdate) {
    await updateFile(filePath);
  }
  
  console.log('All updates completed.');
}

main().catch(console.error); 