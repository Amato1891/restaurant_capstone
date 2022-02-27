const puppeteer = require('puppeteer');

(async () => {
    try {
        // create browser instance
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({width:1920, height: 1080})

        // go to home page
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('#Ceviche');
        await page.click('#Ceviche');
        await page.waitFor(1000);

        // take screenshot
        
        await page.screenshot({path:'screen.png'});

        // shutdown
        browser.close();


    } catch (e) {
        console.log(e)
    }
})();