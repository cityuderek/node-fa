
//// json /////////////////////////////////////////////////////////////////////
const parseJson = (str, defVal = null) => {
  try{
    return JSON.parse(str);
  }catch(ex){}
  return defVal;
};
module.exports.parseJson = parseJson

const stringifyJson = (json, nSpace = 2) => {
  return JSON.stringify(json, null, nSpace);
};
module.exports.stringifyJson = stringifyJson
