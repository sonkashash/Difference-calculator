import process from 'process';
import path from 'path';
import fs from 'fs';

const getAbsPath = (pathToFile) => {
  const __dirname = process.cwd();
  const absPath = path.resolve(__dirname, pathToFile);
  return absPath;
};

const readFile = (pathToFile) => {
  const normalizedPath = pathToFile.startsWith('/') ? pathToFile : getAbsPath(pathToFile);
  return fs.readFileSync(normalizedPath, 'utf-8');
};

export default readFile;
