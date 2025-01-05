const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
main()

async function main() {
  
    let options = new chrome.Options()
    options.options_['debuggerAddress'] = 'http://localhost:50369'
    options.options_['prefs'] = { 'profile.default_content_setting_values': { images: 2 } }

    let driverPath = 'D:\\chrome\\chrome.exe'
    let service = new chrome.ServiceBuilder(driverPath).build()
    chrome.setDefaultService(service)

    let driver = new webdriver.Builder()
      .setChromeOptions(options)
      .withCapabilities(webdriver.Capabilities.chrome())
      .forBrowser('chrome')
      .build()

    await driver.get('https://www.baidu.com')
  }
 
