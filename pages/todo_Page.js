const { expect } = require("@playwright/test")

exports.todo_Page = class todo_Page {

    constructor(page) {
        this.page = page
        this.textBox = page.getByTestId('text-input')
        this.active_Button = page.getByRole('link', { name: 'Active' })
        this.completed_Button = page.getByRole('link', { name: 'Completed' })
        this.all_Button = page.getByRole('link', { name: 'All' })
        this.todolist = page.getByTestId('todo-list')
    }

    async add_Todo_List(item_1, item_2, item_3, item_4, keyAction) {
        await this.textBox.click();
        await this.textBox.fill(item_1);
        await this.textBox.press(keyAction);
        await this.textBox.fill(item_2);
        await this.textBox.press(keyAction);
        await this.textBox.fill(item_3);
        await this.textBox.press(keyAction);
        await this.textBox.fill(item_4);
        await this.textBox.press(keyAction);
    }

    async validate_ItemsAdded(item_1, item_2, item_3, item_4) {
        await expect(this.todolist).toContainText(item_1);
        await expect(this.todolist).toContainText(item_2);
        await expect(this.todolist).toContainText(item_3);
        await expect(this.todolist).toContainText(item_4);
    }

    async check_Two_Items(item_1, item_4) {
        await this.page.getByRole('listitem').filter({ hasText: new RegExp(`^${item_1}$`) }).getByTestId('todo-item-toggle').check();
        await this.page.getByRole('listitem').filter({ hasText: new RegExp(`^${item_4}$`) }).getByTestId('todo-item-toggle').check();
    }

    async validate_Completedtab(item_1, item_4) {
        await this.completed_Button.click();
        await expect(this.page.getByRole('listitem').filter({ hasText: new RegExp(`^${item_1}$`) }).getByTestId('todo-item-toggle')).toBeChecked();
        await expect(this.page.getByRole('listitem').filter({ hasText: new RegExp(`^${item_4}$`) }).getByTestId('todo-item-toggle')).toBeChecked();
    }

    async validate_Activetab(item_2, item_3) {
        await this.active_Button.click();
        await expect(this.page.getByRole('listitem').filter({ hasText: new RegExp(`^${item_2}$`) }).getByTestId('todo-item-toggle')).not.toBeChecked();
        await expect(this.page.getByRole('listitem').filter({ hasText: new RegExp(`^${item_3}$`) }).getByTestId('todo-item-toggle')).not.toBeChecked();
    }
}