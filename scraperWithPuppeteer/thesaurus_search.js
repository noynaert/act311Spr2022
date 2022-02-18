// getDepartments.js

const puppeteer = require("puppeteer");

async function scrape() {
  console.log("In scrape()");
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  await page.goto("https://www.thesaurus.com/browse/smart");
  console.log("Got to www.thesaurus");
  
    // waitfor is deprecated.  Use waitforSelector in this case.
    
    var element = await page.waitForSelector(
        "#meanings > div.css-ixatld.e15rdun50 > ul > li:nth-child(1) > a");
    
    var text = await page.evaluate(element => element.textContent,element)
    console.log(text)
    browser.close()
}

// searching from #meanings > div.css-ixatld.e15rdun50 > ul > li:nth-child(1) > a

//main()
console.log("Starting");
scrape();
console.log("At the last line, but several 'awaits' are still open...");
