import { test, type Page } from '@playwright/test';
import * as dotenv from 'dotenv';
import { Constants } from '../utils/uiConstants';

test.describe.configure({ mode: 'parallel' });
let page: Page;
let isLoginSuccessful = true;
const env = process.env.NODE_ENV || 'local';
dotenv.config({ path: `.env.${env}` });

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(`${process.env.TARGET_URL}`);
});

test.beforeEach('Login test :',async ({ browser }) => {
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

test('Search for result @test: ', async () => {
    if(!isLoginSuccessful){
        test.skip();
    }
    await page.fill(Constants.PRODUCT_SEARCH,`${process.env.PRODUCT_NAME}`);
    await page.click(`//div[@aria-label="${process.env.PRODUCT_NAME}"]`);
});

test('Search and Apply 1st filter @test: ', async () => {
    if(!isLoginSuccessful){
        test.skip();
    }
    await page.fill(Constants.PRODUCT_SEARCH,`${process.env.PRODUCT_NAME}`);
    await page.click(`//div[@aria-label="${process.env.PRODUCT_NAME}"]`);
    // Applying first filter
    await page.getByText(Constants.COD_FILTER).click();
});


test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== "failed") {
        const screenshotPath = 'screenshots/'+`${testInfo.title.replace(/\s+/g, '_')}`+'.png';
        await page.screenshot({ path: screenshotPath });
    }
  });