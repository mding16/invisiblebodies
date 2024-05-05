const fs = require('fs');

function printDirTree(path, indent = 0) {
    const files = fs.readdirSync(path);
    for (const file of files) {
        console.log('  '.repeat(indent) + file);
        const fullPath = path + '/' + file;
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            printDirTree(fullPath, indent + 1);
        }
    }
}

printDirTree('.');
