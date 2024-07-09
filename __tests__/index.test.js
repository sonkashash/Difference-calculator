import genDiff from '../src/index.js';
import readFile from '../src/utils.js';

const diffStylish = readFile('__fixtures__/diff_stylish.txt');
const diffPlain = readFile('__fixtures__/diff_plain.txt');
const diffJson = readFile('__fixtures__/diff_json.txt');
const pathToFile1 = '__fixtures__/file1';
const pathToFile2 = '__fixtures__/file2';

const testData = [
  { format: 'stylish', expected: diffStylish },
  { format: 'plain', expected: diffPlain },
  { format: 'json', expected: diffJson },
];

test.each(testData)('genDiff $format', ({ format, expected }) => {
  expect(genDiff(`${pathToFile1}.json`, `${pathToFile2}.json`, format)).toEqual(
    expected,
  );
  expect(genDiff(`${pathToFile1}.yml`, `${pathToFile2}.yml`, format)).toEqual(
    expected,
  );
  expect(genDiff(`${pathToFile1}.json`, `${pathToFile2}.yml`, format)).toEqual(
    expected,
  );
});
