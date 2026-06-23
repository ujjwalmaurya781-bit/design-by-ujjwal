const fs = require('fs');

const content = fs.readFileSync('styles/style.css', 'utf8');
const lines = content.split('\n');

lines.forEach((line, i) => {
    const lineNum = i + 1;
    if (line.includes('orbit-card') || line.includes('orbit-img') || line.includes('orbit-ring')) {
        console.log(`Line ${lineNum}: ${line.trim()}`);
    }
});
