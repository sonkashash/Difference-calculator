import process from 'process';
import path from 'path';

const normalizePath = (dirName, fileName) => {
    const currentDir = process.cwd();
    const absPath = path.resolve(currentDir, dirName, fileName);
    return absPath;
}

export default normalizePath;
