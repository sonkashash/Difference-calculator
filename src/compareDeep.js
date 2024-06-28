import isObject from 'lodash/isObject.js';
import _ from 'lodash';


const compareDeep = (obj1, obj2) => {
  const keys = [..._.keys(obj1), ..._.keys(obj2)];
  const sortedKeys = _.sortBy(_.union(keys));

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
