// const nfa = require('../util/nfa')

let startTime = null

const start = ()=>{
  startTime = Date.now();
}
module.exports.start = start

const stop = ()=>{
  let timeUsedMs = Date.now() - startTime;
  return timeUsedMs;
}
module.exports.stop = stop