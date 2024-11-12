var assert = require('assert');

describe('passion test', () => {
  it('Geoedge test', async () => {

    const colorButton = await browser.$('id:com.shortcutapp.dinnerrun:id/button_interstitial_gadmob');
    // Change color to pink by clicking
    await colorButton.click();
    await browser.pause(100000);
  
  });
});

