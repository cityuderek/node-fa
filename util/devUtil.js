const { jsonUtil, objUtil, dtUtil } = require(".");

//// log ////////////////////////////////////////////////////////////////
const logd = (...params)=>{
    console.log(...params);
}
exports.logd = logd;

const varDump = (obj, title)=>{
    let detailType = objUtil.getDetailType(obj);
    let smry = `varDump; ${title}; type=${detailType}` + (detailType === 'array' || detailType === 'string'? `(${obj.length})`:"");
    if(detailType === 'integer' || detailType === 'string' || detailType === 'boolean'){
        console.log(smry + "; " + obj);
    }else if(detailType === 'Date'){
        console.log(smry + "; dt=" + dtUtil.formatDtm(obj) + ", " + obj);
    }else if(detailType === 'null' || (detailType === 'array' && obj.length === 0)){
        console.log(smry);
    }else{
        console.log(smry + "\n" + jsonUtil.stringifyJson(obj));
    }
}
exports.varDump = varDump;