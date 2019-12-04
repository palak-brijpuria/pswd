const crypto = require("crypto-js")
const webdriver = require("selenium-webdriver")
const By = webdriver.By

async function test()
{
const driver = new webdriver.Builder().forBrowser('chrome').build()
driver.get('file:////home/palak/CDAC/devOps_Assignments/Password and Encryption/test.html')

const value1 = driver.findElement(By.id('txt'))
value1.sendKeys('Palak')

const value2 = driver.findElement(By.id('password'))
value2.sendKeys('1234')

const button = driver.findElement(By.id('buttoncontinue'))
button.click()

//const password = driver.findElement(By.id('password'))
//const password = '1234'
console.log("PASSWORD "+crypto.MD5(value2)) 


}

test()
