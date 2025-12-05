import { test } from '../fixtures/todo_Data'
import { todo_Page } from '../pages/todo_Page'


test.describe('Todo list Demo', () => {

    let td

    test('test-1', async ({ page, todo_items }) => {
        await page.goto('');
        td = new todo_Page(page)
        await td.add_Todo_List(todo_items.item_1, todo_items.item_2, todo_items.item_3, todo_items.item_4, todo_items.keyAction)
        await td.validate_ItemsAdded(todo_items.item_1, todo_items.item_2, todo_items.item_3, todo_items.item_4)
        await td.check_Two_Items(todo_items.item_1, todo_items.item_4)
        await td.validate_Completedtab(todo_items.item_1, todo_items.item_4)
        await td.validate_Activetab(todo_items.item_2, todo_items.item_3)
    })

    test.afterEach(async ({ page, context }) => {
        await page.close();
        await context.close();
    })
})




