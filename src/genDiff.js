import parseFile from './parsers.js';

const genDiff = (path1, path2) => {
  const obj1 = parseFile(path1);
  const obj2 = parseFile(path2);
  const resObj = {};
  const keys = [...Object.keys(obj1), ...Object.keys(obj2)].sort();

  keys.forEach((key) => {
    if (obj1[key] === obj2[key]) {
      resObj[` ${key} `] = obj1[key];
    } else {
      if (Object.hasOwn(obj1, key)) resObj[`- ${key}`] = obj1[key];
      if (Object.hasOwn(obj2, key)) resObj[`+ ${key}`] = obj2[key];
    }
  });

  return (JSON.stringify(resObj));
};

export default genDiff;


