import { test as base, chromium } from '@playwright/test';

export const test = base.extend({
  todo_items: async ({}, use) => {
    await use({
      item_1: "Buy Grocery",
      item_2: "Pay Bills",
      item_3: "Buy Winter Attires",
      item_4: "Pay Credit card Bills",
      keyAction: "Enter"
    });
  },

  // custom headless and slomotion -enabled browser
  browser: async ({}, use) => {
    const browser = await chromium.launch({
      headless: true,
      slowMo: 1000
    });
    await use(browser);
  },

  // custom recording-enabled context
  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      recordVideo: {
        dir: 'videos/',
        size: { width: 800, height: 800 }
      }
    });
    await use(context);
  },

  // page created from that recording context
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
  }

});
