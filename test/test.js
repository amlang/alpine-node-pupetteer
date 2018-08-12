/**
 * Copyright 2018 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const puppeteer = require('puppeteer')
// should not raise any errors
async function test(){
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_BIN || undefined,
    ignoreHTTPSErrors: true,
    args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage'],
  })
  try {
    console.log(new Date())
    const page = await browser.newPage()
    await page.goto('https://www.google.com')
    const screenshot = await page.screenshot()
  } catch (e) {
    console.error(e)
  }
  await browser.close()
}
test()
