const { webkit }  = require('playwright');


exports.test = async function test() {
const browser = await webkit.launch({headless: false});
const context = await browser.newContext()
const page = await context.newPage();

await page.goto('https://www.google.com')
await page.fill('input', 'vladlearns');
await page.keyboard.press('Enter');

await browser.close();

return null;
}