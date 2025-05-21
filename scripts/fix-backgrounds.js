const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

// Directories to scan
const DIRS_TO_SCAN = [
  'app/services',
  'app/industries',
  'app/company',
  'app/approach',
  'app/ai-strategy',
  'app/careers',
  'app/contact',
  'app/products',
  'app/insights',
];

// File extensions to process
const FILE_EXTENSIONS = ['.tsx', '.jsx'];

// Background classes to add
const BG_CLASSES = {
  main: 'bg-gray-50',
  section: ['bg-gray-50', 'bg-gray-100'],
  div: 'bg-gray-50'
};

// Function to scan directories recursively
async function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await scanDirectory(fullPath);
    } else if (entry.isFile() && FILE_EXTENSIONS.includes(path.extname(entry.name))) {
      await processFile(fullPath);
    }
  }
}

// Function to process files
async function processFile(filePath) {
  try {
    let content = await readFileAsync(filePath, 'utf8');
    let modified = false;
    
    // Find main elements without background class
    if (/<main[^>]*(?!className=)>/.test(content) || 
        /<main[^>]*className="[^"]*"[^>]*>/.test(content) && !/<main[^>]*className="[^"]*bg-gray-\d+[^"]*"[^>]*>/.test(content)) {
      content = content.replace(
        /<main([^>]*)className="([^"]*)"([^>]*)>/g, 
        `<main$1className="$2 ${BG_CLASSES.main}"$3>`
      );
      content = content.replace(
        /<main([^>]*)(?!className=)>/g, 
        `<main$1className="${BG_CLASSES.main}">`
      );
      modified = true;
    }
    
    // Find div elements that could be sections (min-h-screen, container, etc.)
    if (/<div[^>]*className="[^"]*min-h-screen[^"]*"[^>]*>/.test(content) && 
        !/<div[^>]*className="[^"]*bg-gray-\d+[^"]*min-h-screen[^"]*"[^>]*>/.test(content)) {
      content = content.replace(
        /<div([^>]*)className="([^"]*)min-h-screen([^"]*)"([^>]*)>/g, 
        `<div$1className="$2min-h-screen$3 ${BG_CLASSES.div}"$4>`
      );
      modified = true;
    }
    
    // For page.tsx files, add BackgroundFix component if it doesn't exist
    if (filePath.endsWith('page.tsx') || filePath.endsWith('page.jsx')) {
      if (!content.includes('BackgroundFix')) {
        // Add import
        if (!content.includes("import BackgroundFix from")) {
          const importStatement = "import BackgroundFix from '@/app/components/Layout/BackgroundFix';\n";
          // Add after the last import statement
          const lastImportIndex = content.lastIndexOf('import ');
          const endOfImportsIndex = content.indexOf('\n', lastImportIndex);
          
          if (lastImportIndex !== -1 && endOfImportsIndex !== -1) {
            content = 
              content.substring(0, endOfImportsIndex + 1) + 
              importStatement + 
              content.substring(endOfImportsIndex + 1);
          } else {
            // Add at the beginning if no imports found
            content = importStatement + content;
          }
          modified = true;
        }
        
        // Add BackgroundFix wrapper
        if (content.includes('return (') && !content.includes('<BackgroundFix>')) {
          content = content.replace(
            /return \(\s*(<div|<main|<section)/g,
            'return (\n      <BackgroundFix>\n        $1'
          );
          
          content = content.replace(
            /(<\/div>|\s*<\/main>|\s*<\/section>)\s*\);(?!\s*<\/BackgroundFix>)/g,
            '$1\n      </BackgroundFix>\n    );'
          );
          modified = true;
        }
      }
    }
    
    // Save changes if modified
    if (modified) {
      await writeFileAsync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Main function
async function main() {
  console.log('Starting background fix script...');
  
  for (const dir of DIRS_TO_SCAN) {
    try {
      const fullPath = path.join(process.cwd(), dir);
      if (fs.existsSync(fullPath)) {
        await scanDirectory(fullPath);
      } else {
        console.log(`Directory not found: ${fullPath}`);
      }
    } catch (error) {
      console.error(`Error scanning directory ${dir}:`, error);
    }
  }
  
  console.log('Background fix complete.');
}

main().catch(console.error); 