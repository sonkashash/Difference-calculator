import fs from 'fs';
import process from 'process';
import path from 'path';

const normalizePath = (dirName, fileName) => {
    const currentDir = process.cwd();
    const absPath = path.resolve(currentDir, dirName, fileName);
    return absPath;
}

const parser = (path) => {
    const fileName = path.split('/').at(-1);
    const normalizedPath = normalizePath('src/data', fileName );
    const contentInFile = fs.readFileSync(normalizedPath);
    return JSON.parse(contentInFile)
}

export default parser;
