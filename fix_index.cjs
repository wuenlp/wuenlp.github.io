const fs = require('fs');
let content = fs.readFileSync('src/pages/index.astro', 'utf8');

// The problematic lines:
// <img src={logo.src} alt="WüNLP Logo" class="w-full max-w-[300px] h-auto object-contain drop-shadow-xl" />
// </div>"/logo.svg"

content = content.replace(
  /<img src=\{logo\.src\}.*?\/>\s*<\/div>"\/?logo\.svg"/s,
  `<img src="/logo.svg" alt="WüNLP Logo" class="w-full max-w-[300px] h-auto object-contain drop-shadow-xl" />\n            </div>`
);

fs.writeFileSync('src/pages/index.astro', content);
