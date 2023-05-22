const { Builder, By, Key } = require('selenium-webdriver');
const fs = require('fs');

async function scrapeSearchResults(keyword) {
  // Launch the Chrome browser
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the search engine (e.g., Google)
    await driver.get('https://www.google.com');

    // Find the search input field and enter the keyword
    const searchInput = await driver.findElement(By.name('q'));
    await searchInput.sendKeys(keyword, Key.RETURN);

    // Wait for the search results to load
    await driver.sleep(2000);

    // Find all search result links on the page
    const searchResults = await driver.findElements(By.css('div.yuRUbf > a'));
    // console.log(searchResults);
    console.log(searchResults.length);

    // Store the URLs in an array
    const urls = [];
    for (let i = 0; i < 10 && i < searchResults.length; i++) {
      const url = await searchResults[i].getAttribute('href');
    //   console.log("url is" + url);
      urls.push(url);
    }

    // Create a JSON file and write the URLs to it
    const jsonData = JSON.stringify(urls, null, 2);
    fs.writeFileSync('search_results.json', jsonData);

    console.log('Search results scraped and saved to search_results.json');
  } finally {
    // Quit the browser
    await driver.quit();
  }
}

// Usage: node scrape.js <keyword>
const keyword = process.argv[2];
scrapeSearchResults(keyword);
