var assert = require('assert');

describe('Lambdatest Demo Test', function() {
  it('Lambdatest Demo TestCase', async function () {
    await browser.url('https://lambdatest.github.io/sample-todo-app/')
    //await browser.throttle('offline');
  //    browser.throttle({
  //     offline: false,
  //     downloadThroughput: 200 * 1024 / 8,
  //     uploadThroughput: 200 * 1024 / 8,
  //     latency: 20
  // })
  await browser.execute('lambda-throttle-network','Regular 4G'); // comment this if you are running tests in mobile browser
    
    const firstElement = await browser.$('*[name="li1"]');
    await firstElement.click();
    const secondElement = await browser.$('*[name="li2"]');
    await secondElement.click();
    const input = await browser.$('*[id="sampletodotext"]');
    await input.setValue('Lambdatest\n');
    const title = await browser.getTitle();
    assert(title.match(/Sample page - lambdatest.com/i));
  });
});
