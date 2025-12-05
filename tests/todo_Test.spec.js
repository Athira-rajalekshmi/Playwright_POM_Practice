import { test } from '../fixtures/todo_Data'
import { todo_Page } from '../pages/todo_Page'


test.describe('Todo list Demo', () => {

    let td
    const Todo_items = ["Buy Veggies", "Pay electricity Bill", "Buy Gluewine", "Repair car", "Enter"]

    test('test-1', async ({ page, todo_items }) => {
        await page.goto('');
        td = new todo_Page(page)
        await td.add_Todo_List(todo_items.item_1, todo_items.item_2, todo_items.item_3, todo_items.item_4, todo_items.keyAction)
        await td.validate_ItemsAdded(todo_items.item_1, todo_items.item_2, todo_items.item_3, todo_items.item_4)
        await td.check_Two_Items(todo_items.item_1, todo_items.item_4)
        await td.validate_Completedtab(todo_items.item_1, todo_items.item_4)
        await td.validate_Activetab(todo_items.item_2, todo_items.item_3)
    })

    test('test-2', async ({ page }) => {
        await page.goto('');
        td = new todo_Page(page)
        await td.add_Todo_List(Todo_items[0], Todo_items[1], Todo_items[2], Todo_items[3], Todo_items[4])
        await td.validate_ItemsAdded(Todo_items[0], Todo_items[1], Todo_items[2], Todo_items[3])
        await td.check_Two_Items(Todo_items[0], Todo_items[3])
        await td.validate_Completedtab(Todo_items[0], Todo_items[3])
        await td.validate_Activetab(Todo_items[1], Todo_items[2])
    })

    test.afterEach(async ({ page, context }) => {
        await page.close();
        await context.close();
    })
})




