import genDiff from '../src/index.js';
import readFile from '../src/utils.js';

const diffStylish = readFile('__fixtures__/diff_stylish.txt');
const diffPlain = readFile('__fixtures__/diff_plain.txt');
const diffJson = readFile('__fixtures__/diff_json.txt');

const testData = [
  { format: 'stylish', expected: diffStylish },
  { format: 'plain', expected: diffPlain },
  { format: 'json', expected: diffJson },
];

test.each(testData)('genDiff $format', ({ format, expected }) => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', format)).toEqual(
    expected,
  );
});

test.each(testData)('Output: $format', ({ format, expected }) => {
  expect(genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', format)).toEqual(
    expected,
  );
});

test.each(testData)('Output: $format', ({ format, expected }) => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.yml', format)).toEqual(
    expected,
  );
});
