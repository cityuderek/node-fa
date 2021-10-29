const moment = require('moment')

//// Format ////////////////////////////////////////////////////////////////////
const nowDtmStr = ()=>{
  return moment().format("YYYY-MM-DD hh:mm:ss");
}
exports.nowDtmStr = nowDtmStr;

const nowDtmUnderscoreStr = ()=>{
  return moment().format("YYYY_MM_DD_hh_mm_ss");
}
exports.nowDtmUnderscoreStr = nowDtmUnderscoreStr;

const nowDtmNumberStr = ()=>{
  return moment().format("YYYYMMDDhhmmss");
}
exports.nowDtmNumberStr = nowDtmNumberStr;

const nowDtNTmNumberStr = ()=>{
  return moment().format("YYYYMMDD_hhmmss");
}
exports.nowDtNTmNumberStr = nowDtNTmNumberStr;

const nowDtStr = ()=>{
  return moment().format("YYYY-MM-DD");
}
exports.nowDtStr = nowDtStr;

const nowDtUnderscoreStr = ()=>{
  return moment().format("YYYY_MM_DD");
}
exports.nowDtUnderscoreStr = nowDtUnderscoreStr;

const nowDtNumberStr = ()=>{
  return moment().format("YYYYMMDD");
}
exports.nowDtNumberStr = nowDtNumberStr;

const nowTmStr = ()=>{
  return moment().format("hh:mm:ss");
}
exports.nowTmStr = nowTmStr;

const nowTmUnderscoreStr = ()=>{
  return moment().format("hh_mm_ss");
}
exports.nowTmUnderscoreStr = nowTmUnderscoreStr;

const nowTmNumberStr = ()=>{
  return moment().format("hhmmss");
}
exports.nowTmNumberStr = nowTmNumberStr;

const formatDtm = (dtm = null, format = "YYYY-MM-DD hh:mm:ss")=>{
  if(!dtm){
    dtm = moment();
  }
  let mm = toMoment(dtm);
  return mm.format(format);
}
exports.formatDtm = formatDtm;

const formatDt = (dt = null, format = "YYYY-MM-DD")=>{
  if(!dt){
    dt = moment();
  }
  let mm = toMoment(dt);
  return mm.format(format);
}
exports.formatDt = formatDt;

//// Moment ////////////////////////////////////////////////////////////////////
const isMoment = moment.isMoment;
exports.isMoment = isMoment;

const toMoment = (dtm, format = null)=>{
  if(moment.isMoment(dtm)){
    return dtm;
  }

  return format ? moment(dtm, format): moment(dtm);
}
exports.toMoment = toMoment;

const durationNow = (mm)=>{
  return moment.duration(moment(new Date()).diff(mm));
}
exports.durationNow = durationNow;

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
exports.getMm = getMm;

const parseMm = (sDt, format = "YYYY-MM-DD")=>{
  let mm = moment(sDt, format);
  return mm;
}
exports.parseMm = parseMm;

// const toDtStr = (dt, format = "YYYY-MM-DD")=>{
//   let mm = null;
//   if(dt instanceof Date){
//     mm = moment(dt);

//   }else{
//     mm = dt;
//   }
//   return mm.format("YYYY-MM-DD");
// }
// exports.toDtStr = formatDt;
// exports.toDtmStr = formatDtm;

//// Date //////////////////////////////////////////////////////////////////////
const geJts = ()=> Date.now()
exports.geJts = geJts;

const geUts = ()=> parseInt(Date.now() / 1000)
exports.geUts = geUts;

const isDt = (obj)=>{
  return obj instanceof Date
}
exports.isDt = isDt;

const toLocaleString = (dt, defVal = "")=>{
  if(!dt) return defVal;
  try{
    return dt.toDate().toLocaleString();
  }catch(ex){
    // console.log("toLocaleString fail; ", dt);
  }

  return defVal;
}
exports.toLocaleString = toLocaleString;

//// Date //////////////////////////////////////////////////////////////////////

const getTimestamp = ()=>{
  return new Date().getTime();
}
exports.getTimestamp = getTimestamp;