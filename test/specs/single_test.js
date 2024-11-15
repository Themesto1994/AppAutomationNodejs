var assert = require('assert');

describe('Search Wikipedia Functionality', () => {
  it('can find search results', async () => {
    var searchSelector = await $(`~Search Wikipedia`);
    await browser.pause(50000);
   // await searchSelector.waitForDisplayed({ timeout: 30000 });
   await (await searchSelector).waitForDisplayed();
   await (await searchSelector).click();
    //await searchSelector.click();

    var insertTextSelector = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
    await insertTextSelector.waitForDisplayed({ timeout: 30000 });

    await insertTextSelector.addValue("Lambdatest");
    await browser.pause(5000);

    var allProductsName = await $$(`android.widget.TextView`);
    assert(allProductsName.length > 0);

    const sessionId = await browser.sessionId;
    console.log('Session ID at line 21:', sessionId);

    await browser.pause(10000);
  });
});
