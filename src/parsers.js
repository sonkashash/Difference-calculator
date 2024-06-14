import yaml from 'js-yaml';
import path from 'path';
import readFile from './utils.js';

const parseFile = (fileName) => {
  const extension = path.extname(fileName);
  switch (extension) {
    case '.json':
      return JSON.parse(readFile(fileName));
    case '.yml' || '.yaml':
      return yaml.load(readFile(fileName));
    default:
      return JSON.parse(readFile(fileName));
  }
};

export default parseFile;
