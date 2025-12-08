import { test, expect, request } from '@playwright/test'

test.describe('API Functionalities Demo', () => {

    test.only('GET FUNCTION', async ({ request }) => {

        const res = await request.get('https://disease.sh/v3/covid-19/countries/USA?yesterday=true')
        expect(res.status()).toBe(200)

        const text = await res.text()
        expect(text).toContain("USA")

        console.log(await res.json())
    })

    test('POST FUNCTION', async ({ request }) => {

        const response = await request.post("http://127.0.0.1:11434/api/generate", {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                model: "llama2",
                prompt: "Why is the sky blue?",
                options: {
                    temperature: 0.7
                }
            }
        });

        expect(response.ok()).toBeTruthy();
        console.log(await response.json());
    })

})
