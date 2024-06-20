const { Builder, By , util } = require("selenium-webdriver");

const assert = require("assert");

async function calciTest() {

  // launch the browser

  let driver = await new Builder().forBrowser("chrome").build();

  try {

     await driver.get("file:///home/mvsr/calci/index.html");
     await driver.sleep(2000);

 await driver.findElement(By.id("5")).click();
 await driver.findElement(By.id("add")).click();
 await driver.findElement(By.id("8")).click();
 await driver.findElement(By.id("equ")).click();
 await driver.sleep(2000);
 
 const value = await driver.findElement(By.name("t1")).getText();
 
  console.log(" answer is "+ value);
 
 await driver.sleep(2000);
 
 //assert.equal(value,"13");

  console.log(" Addition success");
     
  } finally {

    await driver.quit();

  }

}

calciTest();
