import yaml from 'js-yaml';

const parseObj = (obj, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(obj);
    case '.yml' || '.yaml':
      return yaml.load(obj);
    default:
      throw new Error('Неподходящее расширение');
  }
};

export default parseObj;
