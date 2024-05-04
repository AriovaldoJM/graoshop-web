import { test, expect } from '@playwright/test';

test('sign in sucessfully', async ({ page }) => {
  await page.goto('/sign-in', {waitUntil: 'networkidle'})

  await page.getByLabel('Seu e-mail').fill('ario@hotmail.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Enviamos um link de autenticação para seu e-mail.')

  expect(toast).toBeVisible()
  
  await page.waitForTimeout(2000)
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', {waitUntil: 'networkidle'})

  await page.getByLabel('Seu e-mail').fill('ari@hotmail.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais inválidas.')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', {waitUntil: 'networkidle'})

  await page.getByRole('link', { name: 'Novo Estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')
})

