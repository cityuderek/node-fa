// import { signUpValidation, loginValidation } from "~/utils/inputValidation";

// const rmSpecialChars = (str)=>{
//   if(!str) return "";
//   return str.replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '').toLowerCase();
// }

console.log('load strUtil');

//// string ////////////////////////////////////////////////////////////////////
const showStr = (str, title = 'str')=>{
  if(str === null){
    console.log(`${title} is null`);

  }else{
    let len = str.length;
    console.log(`${title}(${len})="${str}"`);
  }
};
exports.showStr = showStr;

const rmLineNDblSpace = (str)=>{
  return str.replace(/[\t\r\n]/g, ' ').replace(/ +/g, ' ').trim();
};
exports.rmLineNDblSpace = rmLineNDblSpace;

const strCamelize = (data)=>{
  if(Array.isArray(data)){
    let arr = [];
    data.map(str=>{
    arr.push(camelize(str));
    })
    return arr;
  }

  str = data.replace(/[^a-zA-Z0-9_]/g, ' ');
  return data.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}
exports.strCamelize = strCamelize;

const strUnderscore = (str)=>{
  return str.trim().replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '').toLowerCase();
}
exports.strUnderscore = strUnderscore;

const rmSpecialChars = (str, replacement = '')=>{
  return str.replace(/[^a-zA-Z0-9_]/g, replacement)
}
exports.rmSpecialChars = rmSpecialChars;

const rmSpace = (str, replacement = '')=>{
  return str.replace(/ /g, replacement)
}
exports.rmSpace = rmSpace;