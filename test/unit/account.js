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
  });
});
  
