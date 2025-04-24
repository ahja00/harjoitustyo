import { test, expect } from '@playwright/test'

test('has html styles',async({page}) => {
  await page.goto('http://localhost:8080')
  const html = page.locator('html')
  await expect(html).toHaveCSS('font-family', '\"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif')
  await expect(html).toHaveCSS('height',/px$/);
})

test('has body styles',async({page}) => {
  await page.goto('http://localhost:8080')
  const body = page.locator('body')
  await expect(body).toHaveCSS('margin', '0px')
  await expect(body).toHaveCSS('padding','0px');
})

test('has a styles',async({page}) => {
  await page.goto('http://localhost:8080')
  const a = page.locator('a').first()
  await expect(a).toHaveCSS('text-decoration', 'none')
})

test('has banner styles',async({page}) => {
  await page.goto('http://localhost:8080')
  const banner = page.locator('#banner')
  await expect(banner).toHaveCSS('min-height', '273px')
  await expect(banner).toHaveCSS('width',/px$/);
  await expect(banner).toHaveCSS('background-repeat', 'no-repeat')
  await expect(banner).toHaveCSS('background-image', /..\/images\/banner.png/)
})

test('has content styles',async({page}) => {
  await page.goto('http://localhost:8080')
  page.setViewportSize({width: 1500,height: 1500})
  const content = page.locator('#content')
  await expect(content).toHaveCSS('padding-left', '48px')
  await expect(content).toHaveCSS('padding-right', '48px')
  await expect(content).toHaveCSS('padding-bottom', '160px')
})

test('has nav ul styles',async({page}) => {
  await page.goto('http://localhost:8080')
  const ul = page.locator('nav ul')
  await expect(ul).toHaveCSS('list-style-type', 'none')
})

test('has nav li styles',async({page}) => {
  await page.goto('http://localhost:8080')
  const li = page.locator('nav li').first()
  await expect(li).toHaveCSS('display', 'inline-block')
  await expect(li).toHaveCSS('padding', '10px')
  await expect(li).toHaveCSS('border-radius', '5px')
  await expect(li).toHaveCSS('border', '1px solid rgb(247, 147, 30)')
})

test('has nav a styles',async({page}) => {
  await page.goto('http://localhost:8080')
  const a = page.locator('nav a').first()
  await expect(a).toHaveCSS('font-family','Arial, Helvetica, sans-serif')
  await expect(a).toHaveCSS('color','rgb(51, 51, 51)')
})

test('has a hover styles',async({page}) => {
  await page.goto('http://localhost:8080')

  const a = page.locator('nav a').first()
  a.hover()
  await page.waitForTimeout(3000)
  await expect(a).toHaveCSS('font-weight','700')
})

test('has h1 styles',async({page}) => {
  await page.goto('http://localhost:8080')
  page.setViewportSize({width: 1500,height: 1500})
  const h1 = page.locator('h1')
  await expect(h1).toHaveCSS('font-size','24px');
})

test('has p styles',async({page}) => {
  await page.goto('http://localhost:8080')
  const p = page.locator('p').first()
  await expect(p).toHaveCSS('font-size',/px$/);
  await expect(p).toHaveCSS('line-height',/px$/);
})

test('has footer styles',async({page}) => {
  await page.goto('http://localhost:8080')
  const footer = page.locator('footer').first()
  await expect(footer).toHaveCSS('position','fixed');
  await expect(footer).toHaveCSS('bottom','0px');
  await expect(footer).toHaveCSS('width',/px$/);
  await expect(footer).toHaveCSS('background-color','rgb(34, 47, 62)');
})

test('has footer a styles',async({page}) => {
  await page.goto('http://localhost:8080')
  const a = page.locator('footer a').first()
  await expect(a).toHaveCSS('color','rgb(255, 255, 255)');
})

test('has footer ul styles',async({page}) => {
  await page.goto('http://localhost:8080')
  const ul = page.locator('footer ul').first()
  await expect(ul).toHaveCSS('margin',/px$/);
  await expect(ul).toHaveCSS('width','150px');
  await expect(ul).toHaveCSS('color','rgb(255, 255, 255)');
})

test('has footer div styles',async({page}) => {
  await page.goto('http://localhost:8080')
  const div = page.locator('footer div').first()
  await expect(div).toHaveCSS('margin',/px$/);
  await expect(div).toHaveCSS('width','150px');
})

test('has i styles',async({page}) => {
  await page.goto('http://localhost:8080')
  const i = page.locator('i').first()
  await expect(i).toHaveCSS('margin-left','10px');
  await expect(i).toHaveCSS('color','rgb(255, 255, 255)');
})

test('media query 1200px', async ({ page }) => {
  await page.goto('http://localhost:8080')
  await page.setViewportSize({ width: 1000, height: 1000 })
  const banner = page.locator('#banner')
  await expect(banner).toHaveCSS('min-height', '150px')
})

test('media query 600px', async ({ page }) => {
  await page.goto('http://localhost:8080')
  await page.setViewportSize({ width: 590, height: 800 })
  const banner = page.locator('#banner')
  await expect(banner).toHaveCSS('min-height', '100px')
})

test('media query 375px', async ({ page }) => {
  await page.goto('http://localhost:8080')
  await page.setViewportSize({ width: 370, height: 500 })
  const banner = page.locator('#banner')
  await expect(banner).toHaveCSS('min-height', '60px')
  const img = page.locator('#logo img')
  await expect(img).toHaveCSS('width','300px')
})
