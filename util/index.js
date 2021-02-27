// exports.printMsg = function() {
//   console.log("This is a message from the demo package");
// }
// export * as dtUtil from "~/helpers/strUtil"
// export * as strUtil from "~/helpers/supplierHelper"
const arrUtil = require('./arrUtil')
const dtUtil = require('./dtUtil')
const fileUtil = require('./fileUtil')
const objUtil = require('./objUtil')
const mathUtil = require('./mathUtil')
const nfa = require('./nfa')
const strUtil = require('./strUtil')
const testUtil = require('./testUtil')

module.exports = { 
    arrUtil, 
    dtUtil, 
    fileUtil,
    mathUtil, 
    nfa,
    objUtil, 
    strUtil, 
    testUtil,
}