const chalk = require('chalk')
const moment = require('moment')

module.exports = (name='')=>{
  // const sPrefix = '[' + (name ? name + ', ': '')
  const sSuffix = (name ? ', ' + name : '') + ']'
  let logger = {
    d:(...append) => {
      // eslint-disable-next-line no-console
      console.log(chalk.dim('[' + moment().format('HH:mm:ss') + sSuffix), ...append);
      // console.log(chalk.dim(sPrefix + moment().format('HH:mm:ss') + ']'), ...append);
    }
  }

  return logger
}

