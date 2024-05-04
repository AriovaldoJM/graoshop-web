import { test, expect } from '@playwright/test';

test('sign up sucessfully', async ({ page }) => {
    
await page.goto('/sign-up', {waitUntil: 'networkidle'})

await page.getByLabel('Nome do estabelecimento').fill('Grão Shop')
await page.getByLabel('Seu Nome').fill('Jon Doe')
await page.getByLabel('Seu e-mail').fill('arioaaaa@hotmail.com')
await page.getByLabel('Seu Celular').fill('122522232')
await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

const toast = page.getByText('Restaurante cadastrado com sucesso.')

expect(toast).toBeVisible()
  
await page.waitForTimeout(2000)
})

test('sign up with error', async ({ page }) => {

    await page.goto('/sign-up', {waitUntil: 'networkidle'})

    await page.getByLabel('Nome do estabelecimento').fill('Invalid Name')
    await page.getByLabel('Seu Nome').fill('Jon Doe')
    await page.getByLabel('Seu e-mail').fill('arioaaaa@hotmail.com')
    await page.getByLabel('Seu Celular').fill('122522232')
    await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

    const toast = page.getByText('Erro ao cadastrar restaurante')

    expect(toast).toBeVisible()
    
    await page.waitForTimeout(2000)
})

test('navigate to new login page', async ({ page }) => {
    await page.goto('/sign-up', {waitUntil: 'networkidle'})

    await page.getByRole('link', { name: 'Fazer login' }).click()

    expect(page.url()).toContain('/sign-in')
})

