import parseObj from './parsers.js';
import compareDeep from './compareDeep.js';
import formatDiff from './formatters/index.js';
import { readFile, getExtension } from './utils.js';

const genDiff = (path1, path2, formatName = 'stylish') => {
  const file1 = readFile(path1);
  const file2 = readFile(path2);

  const obj1 = parseObj(file1, getExtension(path1));
  const obj2 = parseObj(file2, getExtension(path2));
  const diffTree = compareDeep(obj1, obj2);
  return formatDiff(diffTree, formatName);
};

export default genDiff;
