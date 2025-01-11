import { test, expect } from '@playwright/test';

test('Home page should render correctly', async ({ page }) => {
  // 홈 페이지로 이동
  await page.goto('/');

  // h1 요소의 텍스트를 확인
  const heading = await page.locator('h1').textContent();
  expect(heading).toBe('Hello, World!');

  // h1 요소에 클래스가 포함되었는지 확인
  const classes = await page.locator('h1').getAttribute('class');
  expect(classes).toContain('text-2xl');
  expect(classes).toContain('font-thin');
  expect(classes).toContain('underline');
});
