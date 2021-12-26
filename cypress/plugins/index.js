
const path = require('path')
module.exports = (on, config) => {
  /**
  * @example pass any pwTest name in the playwright folder as a second arg
  * cy.task('playwright', 'pwTest')
  */

  on('task', {
  async playwright(file) {
    const { test } = require(path.resolve(process.cwd(), './playwright/', file))
     return await test()
    },
   })
  }