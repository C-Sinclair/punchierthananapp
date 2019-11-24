describe('Home Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("Should display tab bar", async () => {
    await expect(element(by.id('tabBar'))).toBeVisible()
  });
  
  it("Should show title", async () => {
    await expect(element(by.id("homeTitle"))).toBe("Punchier Than An")
  });

  it("Should end title with a random word", async () => {
    await expect(element(by.id("titleWord"))).toBeVisible()
  })

  it("Should display a random quote", async () => {
    // Start with random quote
    await expect(element(by.id("quote"))).toBeVisible();
    await expect(element(by.id("quote"))).toContain('"');
    await expect(element(by.id("quotedFrom"))).toBeVisible();
    
    // Click to provide new random quote
    await element(by.id("freshQuote")).tap();
    
  });
});
