const StudentFactory = require('../../src/creational/simple.factory');

test('Create student 12 age, name: "Huy Hoang", level: "Secondary school"', () => {
    const student = StudentFactory.createStudent(12, "Huy Hoang");
    expect(student).toEqual({name: 'Huy Hoang', age: 12, level: 'Secondary school'});
});


test('Create student 18 age, name: "John", level: "High school"', () => {
    const student = StudentFactory.createStudent(18, "John");
    expect(student).toEqual({name: 'John', age: 18, level: 'High school'});
});

test('Create student 8 age, name: "Kie", level: "Primary school"', () => {
    const student = StudentFactory.createStudent(8, "Kie");
    expect(student).toEqual({name: 'Kie', age: 8, level: 'Primary school'});
});