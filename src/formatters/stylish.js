import isObject from 'lodash/isObject.js';

const typeSymbols = {
  added: '+',
  deleted: '-',
  unchanged: ' ',
};

const stringify = (node, depth, spacesCount = 4) => {
  if (!isObject(node)) {
    return `${node}`;
  }

  const replacer = ' ';

  const stringifyValue = Object.entries(node).map(([key, value]) => {
    const currentValue = stringify(value, depth + 1);
    const indent = replacer.repeat(depth * spacesCount);

    return `${indent}${key}: ${currentValue}`;
  });

  const indentBrackets = replacer.repeat((depth - 1) * spacesCount);
  return ['{', ...stringifyValue, `${indentBrackets}}`].join('\n');
};

const stylish = (resultDiff) => {
  const iter = (value, depth) => {
    const spacesCount = 4;
    const diffIndent = 2;
    const indent = ' '.repeat(depth * spacesCount - diffIndent);
    const res = value.map((item) => {
      if (Object.hasOwn(typeSymbols, item.type)) {
        return `${indent}${typeSymbols[item.type]} ${item.name}: ${stringify(item.value, depth + 1)}`;
      }
      if (item.type === 'changed') {
        return `${indent}${typeSymbols.deleted} ${item.name}: ${stringify(item.oldValue, depth + 1)}\n${indent}${typeSymbols.added} ${item.name}: ${stringify(item.newValue, depth + 1)}`;
      }
      if (item.type === 'nested') {
        return `${indent}  ${item.name}: ${iter(item.children, depth + 1)}`;
      }
      throw new Error(`${item.type}`);
    });

    const indentBrackets = ' '.repeat((depth - 1) * spacesCount);
    return ['{', ...res, `${indentBrackets}}`].join('\n');
  };

  return iter(resultDiff, 1);
};

export default stylish;
