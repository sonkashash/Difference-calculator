import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/genDiff.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const diffStylish = JSON.stringify(readFile('diff_stylish.txt'));

test('genDiff stylish', () => {
  const gendiff = JSON.stringify((genDiff('file1.json', 'file2.json')));
  expect(gendiff).toEqual(diffStylish);

  const gendiff2 = JSON.stringify(genDiff('file1.yml', 'file2.yml'));
  expect(gendiff2).toEqual(diffStylish);

  const gendiff3 = JSON.stringify(genDiff('file1.json', 'file2.yml'));
  expect(gendiff3).toEqual(diffStylish);
});
