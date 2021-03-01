

const isDt = (obj)=>{
  return obj instanceof Date
}
module.exports.isDt = isDt


//// dataType ////////////////////////////////////////////////////////////////////
const getType = (obj) =>{
  let t = typeof obj;
  if(t === 'object'){
    if(obj instanceof Date) return 'Date';

  }else if(t === 'number'){
    if(Number.isInteger(obj)) return 'integer';
  }
  
  return t;
}
module.exports.getType = getType
