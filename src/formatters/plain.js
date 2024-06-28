import isObject from 'lodash/isObject.js';
import isString from 'lodash/isString.js';

const stringifyValue = (value) => {
  if (isObject(value)) {
    return '[complex value]';
  }

  if (isString(value)) {
    return `'${value}'`;
  }

  return value;
};

const plain = (resultDiff) => {
  const iter = (node, pathToItem) => {
    const result = node.filter((item) => item.type !== 'unchanged').map((item) => {
      switch (item.type) {
        case 'deleted':
          return `Property '${pathToItem}${item.name}' was removed`;
        case 'added':
          return `Property '${pathToItem}${item.name}' was added with value: ${stringifyValue(item.value)}`;
        case 'changed':
          return `Property '${pathToItem}${item.name}' was updated. From ${stringifyValue(item.oldValue)} to ${stringifyValue(item.newValue)}`;
        case 'nested':
          return iter(item.children, `${pathToItem}${item.name}.`);
        default:
          throw new Error(`'${item.type}' не поддерживается`);
      }
    });
    return result.join('\n');
  };
  return iter(resultDiff, '');
};

export default plain;
