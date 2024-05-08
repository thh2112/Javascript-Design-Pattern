const TestFactory = require('../../src/creational/method.factory');

test('Create car normal object"', () => {
    const car = TestFactory(0, 'normal');
    expect(car).toEqual({name: 'Car', color: 'red'});
});
