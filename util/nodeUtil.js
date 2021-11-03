  const util = require('util');

  const sha256 = async(message) =>{
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
  exports.sha256 = sha256;

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