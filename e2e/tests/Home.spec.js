describe('Home Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("Should display tab bar", async () => {
    await expect(element(by.id('tabBar'))).toBeVisible()
  });
  
  it("Should show title", async () => {

  });

  it("Should display a random quote", async () => {
    // Start with random quote
    // Click to provide new random quote
  });
});
