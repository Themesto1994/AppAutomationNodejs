const {remote} = require('webdriverio');



const capabilities = {
    "platformName": "ios",
	"deviceName": "iPhone 13",
	"platformVersion": "15",
	"isRealMobile": true,
    "app": "lt://APP10160601541707923828107276",
};

const wdOpts = {
 user:'sreenadhb',
  key: 'I304plaCpBxpERvH5roJ6vFuWqLf4lokSJv2Bb1JvgIF0pjqbH',
  hostname:'mobile-hub.lambdatest.com',
  port: 80,
  path: "/wd/hub",
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {

      //Selectors
      const search = await driver.$('//*[@name="Search" and ./preceding-sibling::*[@type="XCUIElementTypeOther"]]');
      const done = await driver.$('//XCUIElementTypeButton[@name="Done"]');
      const help = await driver.$('//XCUIElementTypeButton[@name="Help"]');
      const getInTouch = await driver.$('//XCUIElementTypeStaticText[@name="Get in touch"]');
      const preDepChecks = await driver.$('//*[@text="Pre-departure check list"]');
      const termsAndCond = await driver.$('//*[@text="Terms and conditions"]');
      const faqs = await driver.$('//*[@text="Frequently asked questions"]');
      const bookings = await driver.$('//*[@text="Bookings"]');
      const importBooking = await driver.$('//*[@text="Import My Booking"]');
      const bookingEmail = await driver.$('//*[@text="Email used booking your ticket"]')
      const bookingReference = await driver.$('//*[@text="Booking reference number"]')
      const findActiveBooking = await driver.$('//*[@text="Find Active Booking(s)"]')
      const troubleBookingLink = await driver.$('//*[@text="Having trouble finding your reference number?"]')
      const resendConfirmationEmail = await driver.$('//*[@text="Email used booking your ticket"]')
      const resendConfirmationLink = await driver.$('//*[@text="Resend confirmation"]')
      const redeemVoucher = await driver.$('//*[@text="Redeem Voucher"]')
      const okGotIt = await driver.$('//*[@text="Ok, got it!"]')
  
  
      //Tests
      await driver.pause(1000);
      await search.click();
      await driver.pause(1000);
      await done.click();
      await driver.pause(1000);
      await help.click();
      await driver.pause(1000);
      await getInTouch.click();
      await driver.pause(1000);
      await driver.back();
      await preDepChecks.click();
      await driver.pause(1000);
      await driver.back();
      await termsAndCond.click();
      await driver.pause(1000);
      await driver.back();
      // await faqs.click();
      // await driver.back();
  
  
      await bookings.click();
      await driver.pause(1000);
      await redeemVoucher.click();
      await driver.pause(1000);
      await driver.back();
      // await okGotIt.click();
      await driver.pause(1000);
  
      await importBooking.click();
      await driver.pause(1000);
  
      await bookingEmail.setValue('automation-simulator@gmail.com')
      await driver.pause(1000);
      await bookingReference.setValue('DF1234567')
      await driver.pause(1000);
  
      // await importBooking.click();
      // await driver.pause(1000);
  
      await troubleBookingLink.click();
      await resendConfirmationEmail.setValue('simulator@gmail.com')
      await driver.pause(1000);
      await resendConfirmationEmail.clearValue();
      await driver.pause(1000);
      await resendConfirmationEmail.setValue('END OF TEST')
      await driver.pause(1000);
      // await resendConfirmationLink.click(); //BUG!!
      // await driver.pause(3000);  
  
      // Test interrupt App with simuulated phone call
      await driver.gsmCall('07903574057', 'call');
  
    } finally {
      // await driver.removeApp('app-release.apk')
      await driver.deleteSession();
    }
  }
  runTest().catch(console.error);