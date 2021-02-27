// import { signUpValidation, loginValidation } from "~/utils/inputValidation";

// const rmSpecialChars = (str)=>{
//   if(!str) return "";
//   return str.replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '').toLowerCase();
// }

const camelize = (data)=>{
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

const underscore = (str)=>{
  return str.trim().replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '').toLowerCase();
}

const rmSpecialChars = (str, replacement = '')=>{
  return str.replace(/[^a-zA-Z0-9_]/g, replacement)
}

const rmSpace = (str, replacement = '')=>{
  return str.replace(/ /g, replacement)
}

module.exports = {camelize, underscore, rmSpecialChars, rmSpace}