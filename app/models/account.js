'use strict';

function Account(number, name, amount, type){
  this.number = number;
  this.name = name;
  this.balance = amount;
  this.type = type;
  this.deposits = [];
  this.withdraws = [];
  this.penalties = 0;
}


Account.prototype.deposit = function(amount){
  this.balance += amount;
  this.deposits.push(amount);
};

Account.prototype.withdraw = function(amount){
  if(this.penalties > 3){
    return;
  }
  this.balance -= amount;
  this.withdraws.push(amount);
  if(this.balance < 0){
    this.balance -= 50;
    this.penalties++;
  }
};





  module.exports = Account;


