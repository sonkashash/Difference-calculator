import stylish from './stylish.js';
import plain from './plain.js';

const formatDiff = (diff, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(diff);
    case 'plain':
      return plain(diff);
    default:
      throw new Error(`'${formatName}' не поддерживается`);
  }
};

export default formatDiff;
