const { jsonUtil } = require(".");

//// log ////////////////////////////////////////////////////////////////
const logd = (...params)=>{
    console.log(...params);
}
exports.logd = logd;

const varDump = (obj, title)=>{
    let smry = title + "; type=" + typeof(obj);
    console.log(smry + "\n" + jsonUtil.stringifyJson(obj));
}
exports.varDump = varDump;