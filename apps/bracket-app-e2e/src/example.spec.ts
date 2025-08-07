import { test, expect } from "@playwright/test";

test("should display welcome message", async ({ page }) => {
	await page.goto("/");
	await expect(page.locator("h1")).toContainText("Welcome");
});

// Add more tests here as needed
