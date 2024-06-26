import parseFile from './parsers.js';
import compareDeep from './compareDeep.js';
import stylish from './formatters/stylish.js';

const genDiff = (path1, path2) => {
  const obj1 = parseFile(path1);
  const obj2 = parseFile(path2);
  const diffTree = compareDeep(obj1, obj2);
  return stylish(diffTree);
};

export default genDiff;
