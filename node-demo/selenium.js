const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function openBaiduWithSelenium() {
    let options = new chrome.Options();
    options.addArguments(`--remote-debugging-port=59530`); // 使用返回的调试端口
    // options.addArguments('--headless'); // 添加无头模式选项（如果需要）

    // 创建ServiceBuilder对象
    let service = new chrome.ServiceBuilder('E:\\develop\\browse\\simplebrower\\file\\chrome\\chromedriver.exe');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .setChromeService(service) // 设置服务
        .build();

    try {
        await driver.get('https://www.baidu.com');
        // 检查页面标题或其他元素以确认页面加载
        let title = await driver.getTitle();
        console.log('Page title is: ' + title);
    } finally {
        // 关闭浏览器
        // await driver.quit();
    }
})();