
//// json /////////////////////////////////////////////////////////////////////
const parseJson = (str, defVal = null) => {
  try{
    return JSON.parse(str);
  }catch(ex){}
  return defVal;
};
module.exports.parseJson = parseJson
