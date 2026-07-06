const fs = require('fs');
let content = fs.readFileSync('src/pages/index.astro', 'utf8');

content = content.replace(
  '<div class="mt-12 lg:mt-0 right-12 lg:absolute z-0 flex items-center justify-end w-full max-w-md pointer-events-none opacity-90">',
  '<div class="hidden lg:flex mt-12 lg:mt-0 right-12 lg:absolute z-0 items-center justify-end w-full max-w-md pointer-events-none opacity-90">'
);

fs.writeFileSync('src/pages/index.astro', content);
