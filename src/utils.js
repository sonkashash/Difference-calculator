import process from 'process';
import path from 'path';

const getPath = (dirName, fileName) => {
    const __dirname = process.cwd();
    const absPath = path.resolve(__dirname, dirName, fileName);
    return absPath;
}

export default getPath;
