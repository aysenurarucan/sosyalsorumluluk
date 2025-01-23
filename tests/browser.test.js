import { Builder, By } from "selenium-webdriver";

(async function testBrowsers() {
  // Google Chrome'da test
  let chromeDriver = await new Builder().forBrowser("chrome").build();
  try {
    await chromeDriver.get("http://127.0.0.1:5500/index.html");
    console.log("Google Chrome'da test başarıyla çalıştı.");
  } finally {
    await chromeDriver.quit();
  }

  // Mozilla Firefox'ta test
  let firefoxDriver = await new Builder().forBrowser("firefox").build();
  try {
    await firefoxDriver.get("http://127.0.0.1:5500/index.html");
    console.log("Mozilla Firefox'ta test başarıyla çalıştı.");
  } finally {
    await firefoxDriver.quit();
  }
})();
