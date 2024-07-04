import genDiff from '../src/index.js';
import readFile from '../src/utils.js';

const diffStylish = readFile('diff_stylish.txt');
const diffPlain = readFile('diff_plain.txt');
const diffJson = readFile('diff_json.txt');

const testData = [
  { format: 'stylish', expected: diffStylish },
  { format: 'plain', expected: diffPlain },
  { format: 'json', expected: diffJson },
];

test.each(testData)('genDiff $format', ({ format, expected }) => {
  expect(genDiff('file1.json', 'file2.json', format)).toEqual(
    expected,
  );
});

test.each(testData)('Output: $format', ({ format, expected }) => {
  expect(genDiff('file1.yml', 'file2.yml', format)).toEqual(
    expected,
  );
});

test.each(testData)('Output: $format', ({ format, expected }) => {
  expect(genDiff('file1.json', 'file2.yml', format)).toEqual(
    expected,
  );
});
