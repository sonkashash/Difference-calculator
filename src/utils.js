import process from 'process';
import path from 'path';
import fs from 'fs';

const getAbsPath = (fileName) => {
  const __dirname = process.cwd();
  const absPath = path.resolve(__dirname, '__fixtures__', fileName);
  return absPath;
};

const readFile = (pathToFile) => {
  const fileName = pathToFile.split('/').at(-1);
  const normalizedPath = getAbsPath(fileName);
  return fs.readFileSync(normalizedPath, 'utf-8');
};

export default readFile;
