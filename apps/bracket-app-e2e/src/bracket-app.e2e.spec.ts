import { test, expect } from "@playwright/test";

test.describe("Bracket App E2E", () => {
	test("should display nav bar and add bracket button", async ({ page }) => {
		await page.goto("/");
		await expect(page.locator("lib-nav-bar")).toBeVisible();
		await expect(page.locator("lib-add-bracket-button")).toBeVisible();
	});

	test("should navigate to create bracket form", async ({ page }) => {
		await page.goto("/");
		await page.locator("lib-add-bracket-button button").click();
		await expect(page).toHaveURL(/create/);
		await expect(page.locator("form")).toBeVisible();
		await expect(
			page.locator('input[formcontrolname="title"]')
		).toBeVisible();
	});

	test("should validate and continue to bracket node step", async ({
		page,
	}) => {
		await page.goto("/create");
		await page.fill('input[formcontrolname="title"]', "Test Bracket");
		await page.fill('textarea[formcontrolname="description"]', "desc");
		await page.click('mat-select[formcontrolname="size"]');
		await page.click("mat-option >> text=4");
		await page.fill(
			'input[formcontrolname="titleImageUrl"]',
			"http://test.com/img.png"
		);
		await page.click('button:has-text("Continue")');
		await expect(page.locator("h3")).toHaveText(/Add Bracket Nodes/);
	});

	test("should add and remove bracket nodes", async ({ page }) => {
		await page.goto("/create");
		await page.fill('input[formcontrolname="title"]', "Test Bracket");
		await page.click('button:has-text("Continue")');
		await page.click('button:has-text("Add Node")');
		await expect(
			page.locator('input[formcontrolname="title"]')
		).toHaveCount(2); // 1 default + 1 added
		await page.click("button[mat-icon-button]:visible");
		await expect(
			page.locator('input[formcontrolname="title"]')
		).toHaveCount(1);
	});
});
