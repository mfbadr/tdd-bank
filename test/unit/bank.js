/* global describe, it */
'use strict';

var expect = require('chai').expect;
var Bank = require('../../app/models/bank');

describe('Bank', function(){
  describe('constructor', function (){
    it('should create a bank with attributes', function(){
      var chase = new Bank('Chase');
      expect(chase.name).to.equal('Chase');
      expect(chase.accounts).to.have.length(0);
      expect(chase).to.be.an.instanceof(Bank);
    });
  });
});
