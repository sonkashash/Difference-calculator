import genDiff from '../src/index.js';

test('genDiff', () => {
  const gendiff = JSON.parse(genDiff('file1.json', 'file2.json'));
  const result = {
    '- follow': false, ' host ': 'hexlet.io', '- proxy': '123.234.53.22', '- timeout': 50, '+ timeout': 20, '+ verbose': true,
  };
  expect(gendiff).toEqual(result);

  const gendiff2 = JSON.parse(genDiff('/src/file1.json', '/src/file2.json'));
  expect(gendiff2).toEqual(result);
});
