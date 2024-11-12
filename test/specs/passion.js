var assert = require('assert');

describe('passion test', () => {
  it('Test script for passion.io', async () => {

const signup = await browser.$('//android.widget.TextView[@text=\"SIGN UP\"]');

const login = await browser.$('//android.view.ViewGroup[5]');

await login.click();
  
  });
});