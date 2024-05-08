const TestAbstractFactory = require('../../src/creational/abstract.factory');

test('Create Duck object"', () => {
    const animal = TestAbstractFactory(0);
    expect(animal.getName()).toBe('Duck');
});

test('Create Cow object"', () => {
    const animal = TestAbstractFactory(1);
    console.log('ani',animal);
    expect(animal.getName()).toBe('Cow');
});

