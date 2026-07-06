const fs = require('fs');
const content = fs.readFileSync('src/pages/index.astro', 'utf8');
const fixed = content.replace(/<img src=\{logo\.src\}.*?\/>\n\s*<\/div>"\/?logo\.svg"|\s*<img src=\{logo\.src\}.*?\/>\n\s*<\/div>"\/logo\.svg"|<img src=\{logo\.src\}.*/s, `<img src="/logo.svg" alt="WüNLP Logo" class="w-full max-w-[300px] h-auto object-contain drop-shadow-xl" />\n            </div>`);
fs.writeFileSync('src/pages/index.astro', fixed);
