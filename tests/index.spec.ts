import { test, expect } from "@playwright/test";

test.describe("Root Page general UI tests", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("NISLOG");
  });

  test("has proper articles", async ({ page }) => {
    await page.goto("/");
    const locator = page.locator("article");
    await expect(locator).toHaveCount(10);
  });

  test("has logo with root page link", async ({ page }) => {
    await page.goto("/");
    const locator = page.locator(".logoLink");
    await expect(locator).toHaveAttribute("href", "/");
    await expect(locator).toHaveAttribute("title", "NISLOG");
  });

  test("has footer", async ({ page }) => {
    await page.goto("/");
    const locator = page.locator(".copyright");
    const currentYear = new Date().getFullYear();
    await expect(locator).toContainText(`© 2017 - ${currentYear} NISLOG`);
  });

  test("Pagination:link should work", async ({ page }) => {
    await page.goto("/");
    const locator = page.locator('[role="navigation"]:not(.tagCloud__list)');
    const children = locator.locator("li").nth(1);
    await children.click();
    await page.waitForURL(/page\/2/);
    await expect(page).toHaveURL(/page\/2/);
  });
});
