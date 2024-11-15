exports.config = {
    user: process.env.LT_USERNAME || 'YOUR LAMBDATEST USERNAME',
    key: process.env.LT_ACCESS_KEY || 'YOUR LAMBDATEST ACCESS KEY',
    
  
    updateJob: false,
    specs: [
        './test/single_test.js'
    ],
    exclude: [],
    maxInstances: 10,
    // commonCapabilities: {
    //   name: 'Parallel Sample Test',
    //   build: 'WebDriver Sample test',
    // },
    capabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: 'WIN10',
        enableNetworkThrottling: true,
      },{
        path: "/wd/hub",
        hostname: "mobile-hub.lambdatest.com",
        port: 80,
        isRealMobile: true,
        deviceName: 'galaxy.*',
        platformName: 'Android',
      }  
  ],
    services: [
            ['lambdatest', {
                tunnel: false
            }]
        ],

    // product: 'appAutomation',
   
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    // host: 'mobile-hub.lambdatest.com',x
    // port:80,
    
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    }
  
  
  
  }