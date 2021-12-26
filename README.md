### cypress-playwright


### How to use
 Simply pass any playwright test name from the playwright folder as a second argument of the task.
```js
cy.task('playwright', 'googleMe')
```

### How this was done
In the example file, the [Playwright test](./playwright/googleMe.js) is invoked from the [cypress test](./cypress/integration/safari/googleMe.spec.js). This was done using [Cypress task plugin event](https://docs.cypress.io/api/commands/task#Syntax):


```js
 on('task', {
  async playwright(file) {
    const { test } = require(path.resolve(process.cwd(), './playwright/', file))
     return await test()
    },
   })
```
