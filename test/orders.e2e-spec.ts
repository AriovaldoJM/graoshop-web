import { test, expect } from '@playwright/test';

test('List orders', async ({ page }) => {
    await page.goto('/orders', {waitUntil: 'networkidle'})

    expect(
        page.getByRole('cell', { name: 'customer1', exact: true }),
    ).toBeVisible()

    expect(
        page.getByRole('cell', { name: 'customer10', exact: true })
    ).toBeVisible()

    await page.waitForTimeout(2000)
})
test('Paginate orders', async ({ page }) => {
    await page.goto('/orders', {waitUntil: 'networkidle'})

    await page.getByRole('button', { name: 'Próxima Página' }).click()

    expect(
        page.getByRole('cell', { name: 'customer11', exact: true }),
    ).toBeVisible()

    expect(
        page.getByRole('cell', { name: 'customer20', exact: true })
    ).toBeVisible()

    
    await page.getByRole('button', { name: 'Última Página' }).click()

    expect(
        page.getByRole('cell', { name: 'customer51', exact: true }),
    ).toBeVisible()

    expect(
        page.getByRole('cell', { name: 'customer60', exact: true })
    ).toBeVisible()

    await page.getByRole('button', { name: 'Página Anterior' }).click()

    expect(
        page.getByRole('cell', { name: 'customer41', exact: true }),
    ).toBeVisible()

    expect(
        page.getByRole('cell', { name: 'customer50', exact: true })
    ).toBeVisible()

    await page.getByRole('button', { name: 'Primeira Página' }).click()

    expect(
        page.getByRole('cell', { name: 'customer1', exact: true }),
    ).toBeVisible()

    expect(
        page.getByRole('cell', { name: 'customer10', exact: true })
    ).toBeVisible()

    await page.waitForTimeout(2000)
})

test('Filter by order id', async ({ page }) => {
    await page.goto('/orders', {waitUntil: 'networkidle'})

    await page.getByPlaceholder('Id do Pedido').fill('order-11')
    await page.getByRole('button', {name:'Filtrar resultados'}).click()

    expect(page.getByRole('cell', { name: 'order-11' })).toBeVisible()


    await page.waitForTimeout(2000)
})

test('Filter custom by name', async ({ page }) => {
    await page.goto('/orders', {waitUntil: 'networkidle'})

    await page.getByPlaceholder('Nome do cliente').fill('customer11')
    await page.getByRole('button', {name:'Filtrar resultados'}).click()

    expect(page.getByRole('cell', { name: 'customer11' })).toBeVisible()


    await page.waitForTimeout(2000)
})

test('Filter by status', async ({ page }) => {
    await page.goto('/orders', {waitUntil: 'networkidle'})

    await page.getByRole('combobox').click()
    await page.getByLabel('Pendente').click()
    await page.getByRole('button', {name:'Filtrar resultados'}).click()

    const tableRow = await page.getByRole('cell', {name: 'pendente'}).all()

    expect(tableRow).toHaveLength(10)


    await page.waitForTimeout(2000)
})
