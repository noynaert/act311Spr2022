// getDepartments.js

// The web page is https://aps4.missouriwestern.edu/schedule/?tck=202310
// The selector is #department


const puppeteer = require("puppeteer");

async function scrape() {
  console.log("In scrape()");
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  await page.goto("https://aps4.missouriwestern.edu/schedule/?tck=202310");
  console.log("Got to schedule");

  // waitfor is deprecated.  Use waitforSelector in this case.

    //var elements = await page.waitForSelector("#department");
    //elements.forEach(element => console.log(element));
    //console.log(elements);

    const elements = await page.evaluate(() => { 
        const list = Array.from(document.querySelectorAll('#departments option'))
        //return list.map(td => td.textContext)
        console.log(list.map (td => td.textContext))
    });


  //var text = await page.evaluate((element) => element.textContent, element);
  //console.log(text);
  browser.close();
}

// searching from #meanings > div.css-ixatld.e15rdun50 > ul > li:nth-child(1) > a

//main()
console.log("Starting");

scrape();
console.log("At the last line, but several 'awaits' are still open...");
