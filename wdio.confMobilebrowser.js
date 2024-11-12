exports.config = {
    user: process.env.LT_USERNAME || 'YOUR LAMBDATEST USERNAME',
    key: process.env.LT_ACCESS_KEY || 'YOUR LAMBDATEST ACCESS KEY',
    
  
    updateJob: false,
    specs: [
        './test/single_test.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{

        hostname: "mobile-hub.lambdatest.com",
        port: 80,
        "LT:Options": {
        build: 'Webdriverio android Browser ',
        name: "sample",
        "platform" : "Android",
        "deviceName" : "pixel.*",
        "isRealMobile" : true,

            
        }
    
      }],
    services: [
            ['lambdatest', {
                tunnel: false
            }]
        ],
   
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 0,
    
    host: 'mobile-hub.lambdatest.com',
    port:80,
    
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    }
  

  
  }
