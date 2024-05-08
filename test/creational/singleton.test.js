const TodoList = require('../../src/creational/singleton');

test('Test todo list is singleton', () => {
    const todoList1 = TodoList.getInstance();
    const todoList2 = TodoList.getInstance();
    todoList1.addItem('1');
    todoList2.addItem('2');
    expect(todoList1 === todoList2).toBe(true);
    expect(todoList1.items).toEqual(['1', '2']);
});
