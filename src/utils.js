import path from 'path';
import fs from 'fs';

const getAbsPath = (pathToFile) => path.resolve(pathToFile);

export const readFile = (pathToFile) => {
  const absPath = getAbsPath(pathToFile);
  return fs.readFileSync(absPath, 'utf-8');
};

export const getExtension = (pathToFile) => path.extname(pathToFile).slice(1);
