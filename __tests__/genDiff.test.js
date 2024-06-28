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

const testData = [
  { format: 'stylish', expected: diffStylish },
  { format: 'plain', expected: diffPlain },
  { format: 'json', expected: diffJson },
];

test.each(testData)('genDiff $format', ({ format, expected }) => {
  expect(JSON.stringify(genDiff('file1.json', 'file2.json', format))).toEqual(expected);
});

test.each(testData)('Output: $format', ({ format, expected }) => {
  expect(JSON.stringify(genDiff('file1.yml', 'file2.yml', format))).toEqual(expected);
});

test.each(testData)('Output: $format', ({ format, expected }) => {
  expect(JSON.stringify(genDiff('file1.json', 'file2.yml', format))).toEqual(expected);
});
