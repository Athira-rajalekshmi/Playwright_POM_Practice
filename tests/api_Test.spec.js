import { test, expect, request } from '@playwright/test'

test.describe('API Functionalities Demo', () => {

    test('GET FUNCTION', async ({ request }) => {

        const res = await request.get('https://disease.sh/v3/covid-19/countries/USA?yesterday=true')
        
        expect(res.status()).toBe(200)
        expect(response.ok()).toBeTruthy();

        const text = await res.text()
        expect(text).toContain("USA")
        
        console.log(await res.json())
    })
})
