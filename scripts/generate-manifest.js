const fs = require('fs');
const path = require('path');

const environment = process.argv[2] || 'dev';

let manifestPath;
try {
  if (environment === 'prod') {
    manifestPath = path.resolve(__dirname, '../config/manifest/manifest.prod.json');
  } else {
    manifestPath = path.resolve(__dirname, '../config/manifest/manifest.dev.json');
  }
  
  // Read the JSON manifest file
  const manifestContent = fs.readFileSync(manifestPath, 'utf8');
  const manifest = JSON.parse(manifestContent);
  
  // Write to root manifest.json
  const outputPath = path.resolve(__dirname, '../manifest.json');
  fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));
  
  console.log(`✅ Generated ${environment} manifest at ${outputPath}`);
} catch (error) {
  console.error('Error loading manifest configuration:', error);
  process.exit(1);
}
