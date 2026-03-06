import fs from "fs";
import { test, expect } from "@playwright/test";

const TEST_DATA = `---
draft: false
date: "2049-01-01T00:00:00-0800"
title: タグテスト記事
description: これはタグページテスト用の記事です。
eyecatch: /images/eyecatch/eye-move-to-hono.jpg
tags:
- e2e-test-tag
- blog
toc: false
---

これはタグページテスト用の記事です。
`;

// Annotate entire file as serial.
test.describe.configure({ mode: "serial" });

test.describe("Tag Page general UI tests", () => {
  test.beforeAll(async () => {
    await fs.promises.mkdir("./content/post/2049/01", { recursive: true });
    await fs.promises.writeFile(
      "./content/post/2049/01/tag-test.md",
      TEST_DATA,
      "utf8"
    );
  });

  test("has articles filtered by tag", async ({ page }) => {
    await page.goto("/tags/e2e-test-tag");
    const locator = page.locator("article");
    await expect(locator).toHaveCount(1);
  });

  test("displays correct article in tag page", async ({ page }) => {
    await page.goto("/tags/e2e-test-tag");
    const locator = page.locator("article");
    await expect(locator.locator(".postCard__title")).toHaveText(
      "タグテスト記事"
    );
  });

  test("has TagCloud section", async ({ page }) => {
    await page.goto("/tags/e2e-test-tag");
    const tagCloud = page.locator(".tagCloud__list");
    await expect(tagCloud).toBeVisible();
  });

  test("TagCloud has navigation role", async ({ page }) => {
    await page.goto("/tags/e2e-test-tag");
    const tagCloud = page.locator(".tagCloud__list");
    await expect(tagCloud).toHaveAttribute("role", "navigation");
  });

  test("TagCloud contains tag links", async ({ page }) => {
    await page.goto("/tags/e2e-test-tag");
    const tagLinks = page.locator(".tagCloud__link");
    const count = await tagLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test("navigate to another tag page via TagCloud", async ({ page }) => {
    await page.goto("/tags/e2e-test-tag");
    const blogTagLink = page.locator('.tagCloud__link[href="/tags/blog"]');
    await blogTagLink.click();
    await page.waitForURL(/tags\/blog/);
    await expect(page).toHaveURL(/tags\/blog/);
  });

  test("tag page shows articles with that tag", async ({ page }) => {
    await page.goto("/tags/blog");
    const locator = page.locator("article");
    const count = await locator.count();
    expect(count).toBeGreaterThan(0);
  });

  test("clicking article navigates to detail page", async ({ page }) => {
    await page.goto("/tags/e2e-test-tag");
    const article = page.locator("article").first().locator(".postCard__link");
    await article.click();
    await page.waitForURL(/post\/2049\/01\/tag-test/);
    await expect(page).toHaveURL(/post\/2049\/01\/tag-test/);
  });

  test("returns 404 for non-existent tag", async ({ page }) => {
    const response = await page.goto("/tags/non-existent-tag-12345");
    expect(response?.status()).toBe(404);
  });
});
