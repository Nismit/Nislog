import fs from "fs";
import { test, expect } from "@playwright/test";

const TEST_DATA = `---
draft: false
date: "2050-01-01T00:00:00-0800"
title: テスト記事
description: これはテスト記事です。
eyecatch: /images/eyecatch/eye-move-to-hono.jpg
tags:
- blog
toc: false
---

これはテスト記事です。

# 見出し1

これはテキストです。`;

// Annotate entire file as serial.
test.describe.configure({ mode: "serial" });

test.describe("Detail Page general UI tests", () => {
  test.beforeAll(async () => {
    await fs.promises.mkdir("./content/post/2050/01", { recursive: true });
    fs.writeFile(`./content/post/2050/01/test.md`, TEST_DATA, "utf8", (err) =>
      console.log(err)
    );
  });

  test("has specific article", async ({ page }) => {
    await page.goto("/");
    const locator = page.locator("article");
    const article = locator.nth(0);
    await expect(article.locator(".postCard__title")).toHaveText("テスト記事");
    await expect(article.locator("time")).toHaveText("2050/01/01");
  });

  test("navigate to the article", async ({ page }) => {
    await page.goto("/");
    const locator = page.locator("article");
    const article = locator.nth(0).locator(".postCard__link");
    await article.click();
    await page.waitForURL(/post\/2050\/01\/test/);
    await expect(page).toHaveURL(/post\/2050\/01\/test/);
  });

  test("display proper article", async ({ page }) => {
    await page.goto("/post/2050/01/test");
    const locator = page.locator("article");
    await expect(locator.locator("section")).toHaveCount(3);
  });

  test("display proper title", async ({ page }) => {
    await page.goto("/post/2050/01/test");
    const locator = page.getByRole("heading");
    await expect(locator.first()).toHaveText("テスト記事");
  });

  test("display proper content", async ({ page }) => {
    await page.goto("/post/2050/01/test");
    const content = page.locator("article > section").nth(1);
    await expect(content.locator("p").nth(0)).toHaveText(
      "これはテスト記事です。"
    );
    await expect(content.locator("h1")).toHaveText("見出し1");
    await expect(content.locator("p").nth(1)).toHaveText(
      "これはテキストです。"
    );
  });

  test("has tag link", async ({ page }) => {
    await page.goto("/post/2050/01/test");
    const locator = page.locator(".postCard__tag");
    await expect(locator).toHaveText("blog");
    await expect(locator).toHaveAttribute("href", "/tags/blog");
  });

  test("navigate tag page", async ({ page }) => {
    await page.goto("/post/2050/01/test");
    const locator = page.locator(".postCard__tag");
    await locator.click();
    await page.waitForURL(/tags\/blog/);
    await expect(page).toHaveURL(/tags\/blog/);
  });

  test("has related posts", async ({ page }) => {
    await page.goto("/post/2050/01/test");
    const locator = page.locator(".related-articles--container > li");
    await expect(locator).toHaveCount(5);
  });
});
