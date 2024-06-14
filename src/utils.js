import process from 'process';
import path from 'path';
import fs from 'fs';

const getAbsPath = (dirName, fileName) => {
  const __dirname = process.cwd();
  const absPath = path.resolve(__dirname, dirName, fileName);
  return absPath;
};

const readFile = (pathToFile) => {
  const fileName = pathToFile.split('/').at(-1);
  const dirNameFixtures = '__fixtures__';
  const normalizedPath = getAbsPath(dirNameFixtures, fileName);
  return fs.readFileSync(normalizedPath, 'utf-8');
};

export default readFile;
