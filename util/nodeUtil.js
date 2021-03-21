  const util = require('util');

  const promisify = (func)=>{
    return util.promisify(func);
  }
  exports.promisify = promisify;

  let startTs = Date.now();
  const startTimer = () =>{
    startTs = Date.now();
  }
  exports.startTimer = startTimer;

  const timeUsed = () =>{
    return Date.now() - startTs;
  }
  exports.timeUsed = timeUsed;

  const sleep = (ms) =>{
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  exports.sleep = sleep;