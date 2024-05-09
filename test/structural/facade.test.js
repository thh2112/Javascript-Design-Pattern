const bankAccountTest  = require('../../src/structural/facade');
test('initial money 1000, deposit 1000 withdraw 500 => remaining 1500', () => {
    expect(bankAccountTest()).toBe(1500);
});

