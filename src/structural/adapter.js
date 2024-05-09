/**
 * Adapter Pattern: convert interface of class into another interface that client expect
 * Example: covert payment use momo to card visa
 */

class Payment {
    payment(momoPayment) {}
}

class MomoPayment {
    constructor(cardNumber, cvv, amount) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.amount = amount;
    }

    getInfo() {
        return {cardNumber: this.cardNumber, cvv: this.cvv, amount: this.amount};
    }
}

class VisaPayment {
    pay({cardNumber, cvv, amount, expire}) {
        return {cardNumber, cvv, amount, expire};
    }
}

class VisaPaymentAdapter extends Payment {
    constructor(visaPayment) {
        super();
        this.visaPayment = visaPayment;
    }

    payment(momoPayment) {
        const {cardNumber, cvv, amount} = momoPayment;
        const money = amount / 23000;
        const expire = '10/29';
        return  this.visaPayment.pay({cardNumber, cvv, amount: money,  expire});
    }
}

function momoPaymentAdapterTest() {
    const visaPayment = new VisaPayment();
    const momoPayment = new MomoPayment('1222222', '223',230000);
    const visaAdapter = new VisaPaymentAdapter(visaPayment);
    return visaAdapter.payment(momoPayment.getInfo());
}

module.exports = momoPaymentAdapterTest