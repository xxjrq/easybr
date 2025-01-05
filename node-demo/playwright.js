const { chromium } = require('playwright');

(async () => {
    try {
        // 替换为实际的 WebSocket 调试地址
        const browserWSEndpoint = 'ws://127.0.0.1:59795/devtools/browser/088b24ef-8f53-4f43-97e3-36b0a8b5d39d';

        // 连接到已有的 Chrome 实例
        const browser = await chromium.connectOverCDP(browserWSEndpoint);

        // 获取当前的页面列表，或者新建页面
        const context = browser.contexts()[0];
        const page = context.pages().length > 0 ? context.pages()[0] : await context.newPage();

        // 导航到目标网站
        await page.goto('https://www.baidu.com');

        console.log('页面加载成功');

        // 可选：执行其他操作
        // const title = await page.title();
        // console.log('页面标题:', title);

        // 注意：不要关闭浏览器实例，因为这是共享的
        // await browser.close(); 
    } catch (error) {
        console.error('发生错误:', error.message);
    }
})();
