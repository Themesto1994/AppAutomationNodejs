var assert = require('assert');

describe('Search Wikipedia Functionality', () => {
  it('can find search results', async () => {
    var sessionId = browser.capabilities['moz:sessionId'];
    console.log("Session ID:", sessionId);
    var searchSelector = await $(`~Search Wikipedia`);
    await (await searchSelector).waitForDisplayed();
    await (await searchSelector).click();

    var insertTextSelector = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
    await insertTextSelector.waitForDisplayed({ timeout: 30000 });
    await insertTextSelector.addValue("Lambdatest");
    await browser.pause(5000);

    var allProductsName = await $$(`android.widget.TextView`);
    assert(allProductsName.length > 0);

    // Define variable for status
    var status = "passed";
    
    // Construct script using template literal
    var script = `lambda-hook: {"action": "setTestStatus", "arguments": {"status": "${status}", "remark": "This is a sample remark for failed test"}}`;

    // Execute script
    await browser.executeScript(script);
  });
});
