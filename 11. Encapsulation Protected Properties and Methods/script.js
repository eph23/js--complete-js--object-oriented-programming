'use strict';
'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = [];
    this.location = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Load Approved`);
    }
  }
}

const acc1 = new Account('Eph', 'EUR', 1111, []);

acc1.deposit(250);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements);
console.log(acc1);
console.log(acc1._pin);
