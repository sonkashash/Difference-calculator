import parseFile from './parsers.js';
import compareDeep from './compareDeep.js';
import formatDiff from './formatters/index.js';

const genDiff = (path1, path2, formatName = 'stylish') => {
  const obj1 = parseFile(path1);
  const obj2 = parseFile(path2);
  const diffTree = compareDeep(obj1, obj2);
  return formatDiff(diffTree, formatName);
};

export default genDiff;
