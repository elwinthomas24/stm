const { Builder, By, Key, until } = require('selenium-webdriver');

(async () => {
  // Create a new instance of the WebDriver
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the website with the form
    await driver.get('https://elwinthomas24.github.io/stm/');

    // Fill out the form fields
    await driver.findElement(By.name('name')).sendKeys('John Doe');
    await driver.sleep(2000);
    await driver.findElement(By.name('email')).sendKeys('johndoe@example.com');
    await driver.sleep(2000);
    await driver.findElement(By.name('age')).sendKeys('30');
    await driver.sleep(2000);
    await driver.findElement(By.name('address')).sendKeys('123 Main St');
    await driver.sleep(2000);
    // await driver.findElement(By.name('phone')).sendKeys('555-1234', Key.RETURN);
    await driver.findElement(By.css('#gender > option[value=male]')).click();
    await driver.sleep(2000);
    
    // Submit the form
    await driver.findElement(By.css('input[type="submit"]')).click();

    console.log('Form submitted successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Quit the WebDriver
    // await driver.quit();
  }
})();
