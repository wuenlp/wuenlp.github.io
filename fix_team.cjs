const fs = require('fs');
let content = fs.readFileSync('src/pages/team.astro', 'utf8');

const target = `                            {member.data.profileUrl && (
                                <a href={member.data.profileUrl} class="inline-flex items-center text-sm font-medium text-primary hover:text-primary-container transition-colors group">
                                    View Profile 
                                </a>
                            )}`;

content = content.split(target).join('');

fs.writeFileSync('src/pages/team.astro', content);
