const moment = require('moment')

//// Moment
const isMoment = moment.isMoment;
module.exports.isMoment = isMoment;

const durationNow = (mm)=>{
  return moment.duration(moment(new Date()).diff(mm));
}
module.exports.durationNow = durationNow;

const getMm = (dt = null, addYr = 0, addMo = 0, addDay = 0)=> {
    let mm;
    if(dt){
        mm = moment(dt)

    }else{
        mm = moment()
    }
    if(addYr){
        mm = mm.add(addYr,'years')
    }
    if(addMo){
        mm = mm.add(addMo,'months')
    }
    if(addDay){
        mm = mm.add(addDay,'days')
    }

    return mm;
}
module.exports.getMm = getMm;

const parseMm = (sDt, format = "YYYY-MM-DD")=>{
  let mm = moment(sDt, format);
  return mm;
}
module.exports.parseMm = parseMm;

const toDtStr = (dt, format = "YYYY-MM-DD")=>{
  let mm = null;
  if(dt instanceof Date){
    mm = moment(dt);

  }else{
    mm = dt;
  }
  return mm.format("YYYY-MM-DD");
}
module.exports.toDtStr = toDtStr;

//// Date
const geJts = ()=> Date.now()
module.exports.geJts = geJts;

const geUts = ()=> parseInt(Date.now() / 1000)
module.exports.geUts = geUts;

const isDt = (obj)=>{
  return obj instanceof Date
}
module.exports.isDt = isDt;

const toLocaleString = (dt, defVal = "")=>{
  if(!dt) return defVal;
  try{
    return dt.toDate().toLocaleString();
  }catch(ex){
    // console.log("toLocaleString fail; ", dt);
  }

  return defVal;
}
module.exports.toLocaleString = toLocaleString;