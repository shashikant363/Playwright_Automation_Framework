import { test, type Page } from '@playwright/test';
import * as dotenv from 'dotenv';
import { Constants } from '../utils/uiConstants';

test.describe.configure({ mode: 'serial' });
let page: Page;
let isLoginSuccessful = true;
const env = process.env.NODE_ENV || 'local';
dotenv.config({ path: `.env.${env}` });

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`${process.env.TARGET_URL}`);
    await page.click(Constants.LOGIN_MENU);
    await page.fill(Constants.EMAIL_NO_FIELD,`${process.env.TEST_USERNAME}`);
    await page.click(Constants.CONTINUE);
    await page.fill(Constants.PASSWORD_FIELD,`${process.env.TEST_PASSWORD}`);
    await page.click(Constants.SIGN_IN);
    if(await page.getByRole('alert').isVisible()){
        isLoginSuccessful = false;
        page.pause();
    }
});

test('Search for result : ', async () => {
    if(!isLoginSuccessful){
        test.skip();
    }
    await page.fill(Constants.PRODUCT_SEARCH,`${process.env.PRODUCT_NAME}`);
    await page.click(`//div[@aria-label="${process.env.PRODUCT_NAME}"]`);
});

test('Apply 1st filter : ', async () => {
    if(!isLoginSuccessful){
        test.skip();
    }
    // Applying first filter
    await page.getByText(Constants.COD_FILTER).click();
});

test('Apply 2nd filter @test: ', async () => {
    if(!isLoginSuccessful){
        test.skip();
    }
    // Applying second filter
    await page.click(Constants.SG_FILTER);
});


test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== "failed") {
        const screenshotPath = `screenshots/${testInfo.title.replace(/\s+/g, '_')}.png`;
        await page.screenshot({ path: screenshotPath });
    }
  });