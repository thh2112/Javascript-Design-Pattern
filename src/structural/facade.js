/**
 * Facade Pattern: provides a unified interface to a set of interfaces in a subsytem. 
 * Facade defines a higher- level interface that makes the subsystem easier to use.
 */


class BankAccount {
    constructor() {
        this.bankAccountFacade = new BankAccountFacade('Huy','1234567890');
    }

    deposit(money) {
        this.bankAccountFacade.deposit(money);

    }

    withdraw(money) {
        this.bankAccountFacade.withdraw(money);
    }

    getBalance() {
        return this.bankAccountFacade.getBalance();
    }
}


class BankAccountFacade {
    constructor(accountName, securityCode) {
        this.accountName = accountName;
        this.securityCode = securityCode;
        this.accountChecker = new AccountChecker(accountName);
        this.securityCodeChecker = new SecurityCodeChecker(securityCode);
        this.cashManager = new CashManager(1000);
    }

    deposit(money) {
        if (!this.accountChecker.valid(this.accountName)) {
            return;
        }

        if (!this.securityCodeChecker.valid(this.securityCode)) {
            return;
        }

        this.cashManager.deposit(money);
        
    }


    withdraw(money) {
        if (!this.accountChecker.valid(this.accountName)) {
            return;
        }

        if (!this.securityCodeChecker.valid(this.securityCode)) {
            return;
        }

        if (!this.cashManager.haveEnoughCash(money)) {
            return;
        }

        this.cashManager.withdraw(money);
    }

    getBalance() {
       return  this.cashManager.getBalance()
    }
}

class AccountChecker {
    constructor(accountName) {
        this.accountName = accountName;
        
    }

    valid(accountName) {
        console.log(this.accountName, accountName);
        return this.accountName === accountName;
    }
}

class SecurityCodeChecker {
    constructor(securityCode) {
        this.securityCode = securityCode;
    }

    valid(securityCode) {
       return this.securityCode === securityCode;
    }
}

class CashManager {
    money;
    constructor(money) {
        this.money = money;
    }

    deposit(money) {
        this.money += money;
    }

    withdraw(money) {
        this.money -= money;
    }

    getBalance() {
        return this.money;
    }

    haveEnoughCash(money) {
        return this.money >= money;
    }
}

function bankAccountTest() {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000);
    bankAccount.withdraw(500);
    return bankAccount.getBalance();
}

module.exports = bankAccountTest