/**
 * Singleton Pattern: limits the number of instances of a particular object to just one. This single instance is called the singleton
 * All object is create by Singleton Pattern, this clone from only object => same
 * It population into logging, config file, caching
 */


class TodoList {
    items = [];
    static instance = null;
    constructor() {
        if (TodoList.instance) {
            return;
        }

        TodoList.instance = this;
    }

    static getInstance() {
        if (!TodoList.instance) {
            return TodoList.instance = new TodoList();
        }

        return TodoList.instance;
    }

    addItem(item) {
        this.items.push(item);
    }
}

module.exports = TodoList;
