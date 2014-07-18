'use strict';

function Account(number, name, amount, type){
  this.number = number;
  this.name = name;
  this.balance = amount;
  this.type = type;
  this.deposits = [];
  this.withdraws = [];
}

Account.prototype.deposit = function(amount){
  this.balance += amount;
  this.deposits.push(amount);
};







  module.exports = Account;


