const momoPaymentAdapterTest  = require('../../src/structural/adapter');
test('momo payment with visa"', () => {
    expect(momoPaymentAdapterTest()).toStrictEqual({cardNumber: '1222222', cvv: '223', amount: 10, expire: '10/29'});
});

