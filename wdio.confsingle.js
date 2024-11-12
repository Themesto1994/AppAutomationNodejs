exports.config = {
    user: process.env.LT_USERNAME || 'sreenadhb',
    key: process.env.LT_ACCESS_KEY || 'I304plaCpBxpERvH5roJ6vFuWqLf4lokSJv2Bb1JvgIF0pjqbH',
    
  
    updateJob: false,
    specs: [
        './test/single_test.js'
    ],
    exclude: [],
    maxInstances: 10,

    capabilities: [{
        
        browserName: 'chrome',
        version: 'latest',
        platform: 'WIN10',
        enableNetworkThrottling: true,
        build: "Webdriverio Browser"
       
      }],
    services: [
            ['lambdatest', {
                tunnel: false,
                // lambdatestOpts: {
                //     mitm:true,

                // }
            }]
        ],
   
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 0,
    
    // host: 'mobile-hub.lambdatest.com',
    // port:80,
    
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    }
  

  
  }
