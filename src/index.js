import normalizePath from './utils.js';
import fs from 'fs';

const parseFile = (path) => {
    const fileName = path.split('/').at(-1);
    const normalizedPath = normalizePath('src/data', fileName );
    const contentInFile = fs.readFileSync(normalizedPath);
    return JSON.parse(contentInFile)   
}

const genDiff = (path1, path2) => {
    const obj1 = parseFile(path1);
    const obj2 = parseFile(path2)
    let resObj = {};
    const keys = [...Object.keys(obj1), ...Object.keys(obj2)].sort();

    for (let key of keys){
        if (obj1[key] === obj2[key]){
            resObj[` ${key} `] = obj1[key];
        }
        if (obj1[key] !== obj2[key]){
            if ( Object.hasOwn(obj1, key) ) resObj[`- ${key}`] = obj1[key];
            if ( Object.hasOwn(obj2, key) ) resObj[`+ ${key}`] = obj2[key];
        }
    }
    return (JSON.stringify(resObj))
}

export default genDiff;

