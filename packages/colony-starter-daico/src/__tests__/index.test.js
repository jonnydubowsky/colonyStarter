// Import examples
const connectNetwork = require('../examples/connectNetwork');

// Testing Colony Starter DAICO examples
describe('Colony Starter DAICO', () => {

  // Test the connectNetwork() example
  test('connectNetwork() works', async () => {
    let networkClient = await connectNetwork(0);
    expect(networkClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

});