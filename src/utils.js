import process from 'process';
import path from 'path';
import fs from 'fs';

const getPath = (dirName, fileName) => {
    const __dirname = process.cwd();
    const absPath = path.resolve(__dirname, dirName, fileName);
    return absPath;
}

const readFile = (path) => {
    const fileName = path.split('/').at(-1);
    const dirNameFixtures = '__fixtures__';
    const normalizedPath = getPath(dirNameFixtures, fileName );
    return fs.readFileSync(normalizedPath, 'utf-8');
}

export default readFile;
