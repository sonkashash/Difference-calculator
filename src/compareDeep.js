import isObject from 'lodash/isObject.js';

const compareDeep = (obj1, obj2) => {
  const unsortedKeys = [...Object.keys(obj1), ...Object.keys(obj2)];
  const sortedKeys = Array.from(new Set(unsortedKeys.sort()));

  const resultDiff = sortedKeys.map((key) => {
    if (!Object.hasOwn(obj1, key)) {
      return { name: key, type: 'added', value: obj2[key] };
    }

    if (!Object.hasOwn(obj2, key)) {
      return { name: key, type: 'deleted', value: obj1[key] };
    }

    if (isObject(obj1[key]) && isObject(obj2[key])) {
      return { name: key, type: 'nested', children: compareDeep(obj1[key], obj2[key]) };
    }

    if (obj1[key] !== obj2[key]) {
      return {
        name: key, type: 'changed', valueBefore: obj1[key], valueAfter: obj2[key],
      };
    }

    return { name: key, type: 'unchanged', value: obj1[key] };
  });

  return resultDiff;
};

export default compareDeep;
