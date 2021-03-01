const _ = require('lodash');

console.log('load nfa');

// module.exports = {
//   ...require('./arrUtil'),
//   ...require('./dataTypeUtil'),
//   ...require('./dtUtil'),
//   ...require('./mathUtil'),
//   ...require('./objUtil'),
//   ...require('./strUtil')
// }

const arrUtil = require('./arrUtil')
const dataTypeUtil = require('./dataTypeUtil')
const dtUtil = require('./dtUtil')
const mathUtil = require('./mathUtil')
const objUtil = require('./objUtil')
const strUtil = require('./strUtil')
module.exports = {
  ...arrUtil,
  ...dataTypeUtil,
  ...dtUtil,
  ...mathUtil,
  ...objUtil,
  ...strUtil
}

//// date ////////////////////////////////////////////////////////////////////

// module.exports = {clone, isObj, isNonEmptyObj, gov, equals}

// const {strUtil} = require('./util');

// console.log('node-fa');
// console.log('underscore=' + strUtil.underscore('Aaa BB'));