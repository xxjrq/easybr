const puppeteer = require('puppeteer');

(async () => {
    try {
        const browserWSEndpoint = 'ws://127.0.0.1:60548/devtools/browser/855da957-044c-4aa1-b20d-2732c01b2ee3';

        const browser = await puppeteer.connect({ browserWSEndpoint });

        const pages = await browser.pages();
        const page = pages.length > 0 ? pages[0] : await browser.newPage();

        // 导航到目标网址
        await page.goto('https://www.baidu.com');
        console.log('页面加载成功');

    } catch (error) {
        console.error('发生错误:', error.message);
    }
})();
