/* global describe, it */
'use strict';

var expect = require('chai').expect;
var Account = require('../../app/models/account');

describe('Account', function(){
  describe('constructor', function(){
    it('Should have appropriate attributes', function(){
      var account = new Account(3, 'Sara', 1500, 'savings');
      expect(account.number).to.equal(3);
      expect(account.name).to.equal('Sara');
      expect(account.balance).to.equal(1500);
      expect(account.type).to.equal('savings');
      expect(account.deposits).to.have.length(0);
      expect(account.withdraws).to.have.length(0);
      expect(account).to.be.instanceof(Account);

      expect(account.penalties).to.equal(0);
    });
  });
  describe('#deposit', function(){
    it('Should increase balance and the amunt to deposit array', function(){
      var acct = new Account(3, 'Sara', 1500, 'savings');
      acct.deposit(200);
      expect(acct.balance).to.equal(1700);
      expect(acct.deposits).to.have.length(1);
      expect(acct.deposits[0]).to.equal(200);
    });
    it('Should not deposit if acct suspended', function (){
      var acct = new Account(3, 'Sara', 1500, 'savings');
      acct.penalties = 5;
      acct.deposit(200);
      expect(acct.balance).to.equal(1500);
    });
  });
  describe('#withdraw', function(){
    it('should decrease balance and add to withdraws array', function(){
      var acct = new Account(3, 'Sara', 1500, 'savings');
      acct.withdraw(200);
      expect(acct.balance).to.equal(1300);
      expect(acct.withdraws).to.have.length(1);
      expect(acct.withdraws[0]).to.equal(200);
    });
    it('should incur a service fee is balance < 0', function(){
      var acct = new Account(3, 'Sara', 15, 'savings');
      acct.withdraw(200);
      expect(acct.balance).to.equal(-235);
      expect(acct.penalties).to.equal(1);
    });
    it('should not withdraw if acct suspended', function(){
      var acct = new Account(3, 'Sara', 1500, 'savings');
      acct.penalties = 5;
      acct.withdraw(200);
      expect(acct.balance).to.equal(1500);
    });
  });
});
  
