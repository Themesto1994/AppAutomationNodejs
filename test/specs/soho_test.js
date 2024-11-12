var assert = require('assert');

describe('Search Wikipedia Functionality', () => {
  it('can find search results', async () => {
    await driver.pause(500);
    // await driver.terminateApp("ca.qc.gouv.portefeuilleqc");
    await driver.execute("lambda-uninstall-app=ca.qc.gouv.portefeuilleqc");
    // await driver.activateApp("ca.qc.gouv.portefeuilleqc");
    await driver.execute("lambda-install-app=lt://APP1016022121715348835070846")
    await driver.activateApp("ca.qc.gouv.portefeuilleqc");
    await driver.terminateApp("ca.qc.gouv.portefeuilleqc");
    

  });
});
