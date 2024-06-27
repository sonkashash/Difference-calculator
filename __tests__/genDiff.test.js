import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/genDiff.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const diffStylish = JSON.stringify(readFile('diff_stylish.txt'));
const diffPlain = JSON.stringify(readFile('diff_plain.txt'));
const diffJson = JSON.stringify(readFile('diff_json.txt'));

test('genDiff stylish', () => {
  const gendiff = JSON.stringify((genDiff('file1.json', 'file2.json', 'stylish')));
  expect(gendiff).toEqual(diffStylish);

  const gendiff2 = JSON.stringify(genDiff('file1.yml', 'file2.yml', 'stylish'));
  expect(gendiff2).toEqual(diffStylish);

  const gendiff3 = JSON.stringify(genDiff('file1.json', 'file2.yml', 'stylish'));
  expect(gendiff3).toEqual(diffStylish);
});

test('genDiff plain', () => {
  const gendiff = JSON.stringify((genDiff('file1.json', 'file2.json', 'plain')));
  expect(gendiff).toEqual(diffPlain);

  const gendiff2 = JSON.stringify(genDiff('file1.yml', 'file2.yml', 'plain'));
  expect(gendiff2).toEqual(diffPlain);

  const gendiff3 = JSON.stringify(genDiff('file1.json', 'file2.yml', 'plain'));
  expect(gendiff3).toEqual(diffPlain);
});

test('genDiff json', () => {
  const gendiff = JSON.stringify((genDiff('file1.json', 'file2.json', 'json')));
  expect(gendiff).toEqual(diffJson);

  const gendiff2 = JSON.stringify(genDiff('file1.yml', 'file2.yml', 'json'));
  expect(gendiff2).toEqual(diffJson);

  const gendiff3 = JSON.stringify(genDiff('file1.json', 'file2.yml', 'json'));
  expect(gendiff3).toEqual(diffJson);
});
