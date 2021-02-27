const moment = require('moment')

const isMoment = (obj)=>{
  return moment.isMoment(obj);
}
module.exports.isMoment = isMoment

const isDt = (obj)=>{
  return obj instanceof Date
}
module.exports.isDt = isDt