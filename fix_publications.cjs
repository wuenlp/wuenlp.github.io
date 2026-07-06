const fs = require('fs');
let content = fs.readFileSync('src/pages/publications.astro', 'utf8');

// Restore the article card hover state
content = content.replace(
  /<article class="pub-card p-8 bg-surface-container-low rounded-xl hover:bg-primary-container hover:text-on-primary-container hover:border-primary transition-all duration-300 group"/g,
  `<article class="pub-card p-8 bg-surface-container-low rounded-xl hover:bg-surface-container-highest transition-all duration-300 group"`
);

fs.writeFileSync('src/pages/publications.astro', content);
