  const util = require('util');

  const promisify = (func)=>{
    return util.promisify(func);
  }
  exports.promisify = promisify;