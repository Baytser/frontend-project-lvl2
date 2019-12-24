import fs from 'fs';
import _ from 'lodash';

export default (firstPath, secondPath) => {
  const firstData = fs.readFileSync(firstPath, 'utf8');
  const secondData = fs.readFileSync(secondPath, 'utf8');
  const firstJsonObj = JSON.parse(firstData);
  const secondJsonObj = JSON.parse(secondData);
  const allKeys = _.union(_.keys(firstJsonObj), _.keys(secondJsonObj));
  const compareResult = `{
    ${allKeys.reduce((acc, key) => {
    if (firstJsonObj[key] === secondJsonObj[key]) {
      return `${acc} 
       ${key}: ${firstJsonObj[key]}`;
    }
    if (_.has(firstJsonObj, key) && !_.has(secondJsonObj, key)) {
      return `${acc}
      -${key}: ${firstJsonObj[key]}`;
    }
    if (!_.has(firstJsonObj, key) && _.has(secondJsonObj, key)) {
      return `${acc}
      +${key}: ${secondJsonObj[key]}`;
    }
    if (firstJsonObj[key] !== secondJsonObj[key]) {
      return `${acc}
      +${key}: ${secondJsonObj[key]}
      -${key}: ${firstJsonObj[key]}`;
    }
    return acc;
  }, '')}
}`;
  console.log(compareResult);
};
