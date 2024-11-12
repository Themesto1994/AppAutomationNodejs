var assert = require('assert');

describe('Proverbial test', () => {
  it('Test script for proverbial', async () => {

// Changes the color of the text
await $('[id$="color"]').click();
await browser.pause(1000);

// Changes the text to "Proverbial"
await $('[id$="Text"]').click();
await browser.pause(1000);

// Toast will be visible
await $('[id$="toast"]').click();
await browser.pause(1000);

// Notification will be visible
// await $('[id$="notification"]').click();
// await browser.pause(4000);

// Opens the geolocation page
await $('[id$="geoLocation"]').click();
await browser.pause(4000);

// Takes back
await browser.back();

// Takes to speedtest page
$('[id$="speedTest"]').click();
await browser.pause(4000);

// await browser.back();

await driver.touchAction([
  {
      action: 'press',

          x: 600,
          y: 2115,

  },
  {
      action: 'wait',

          ms: 500

  },
  {
      action: 'moveTo',

          x: 600,
          y: 1500,

  }, {
      action:'release',
  }
]);



// Opens the browser
$('[id$="Browser"]').click();
await browser.pause(1000);

const url = $('[id$="url"]');
await url.click();
// await url.setValue("https://www.lambdatest.com");
await await browser.sendKeys(["https://www.lambdatest.com"]);

$('[id$="find"]').click();
await browser.pause(1000);


  
  });
});

