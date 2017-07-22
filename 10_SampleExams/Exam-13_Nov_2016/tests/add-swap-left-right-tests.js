let expect = require('chai').expect;
let createList = require('../02_AddSwapLeftRight');

describe('Testing main functionality', function () {
    let myList = {};

    beforeEach(function () {
        myList = createList();
    });

    it("should contain all properties", function () {
        expect(myList.add).to.exist;
        expect(myList.swap).to.exist;
        expect(myList.shiftLeft).to.exist;
        expect(myList.shiftRight).to.exist;
        expect(myList.toString).to.exist;
    });

    //add function
    it('testing add with single element', function () {
       myList.add('3');
       expect(myList.toString()).to.equal('3');
    });
    it('testing add with many elements', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        expect(myList.toString()).to.equal('3, hey, 777, 2');
    });

    //shift right function
    it('shifting right a single time', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.shiftRight();

        expect(myList.toString()).to.equal('2, 3, hey, 777');
    });
    it('shifting right many times', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.shiftRight();
        myList.shiftRight();

        expect(myList.toString()).to.equal('777, 2, 3, hey');
    });

    //shifting left function
    it('shifting left a single time', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.shiftLeft();

        expect(myList.toString()).to.equal('hey, 777, 2, 3');
    });
    it('shifting left many times', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.shiftLeft();
        myList.shiftLeft();

        expect(myList.toString()).to.equal('777, 2, 3, hey');
    });

    //swap function
    it('swapping two valid indexes', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(0, 2);

        expect(myList.toString()).to.equal('777, hey, 3, 2');
    });
    it('modify list when swapping two valid indexes', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(0, 2);

        expect(myList.swap()).to.equal(false);
    });

    it('swapping two invalid indexes', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(-1, 4);

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        // expect(myList.swap()).to.equal(false);
    });
    it('modify list when swapping two invalid indexes', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(-1, 4);

        // expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });

    it('swapping index1 valid and index2 invalid indexes', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(0, 4);

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        // expect(myList.swap()).to.equal(false);
    });
    it('modify list when swapping index1 valid and index2 invalid indexes', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(0, 4);

        // expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });
    it('swapping index1 invalid and index2 valid indexes', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(-1, 3);

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        // expect(myList.swap()).to.equal(false);
    });
    it('modify list when swapping index1 invalid and index2 valid indexes', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(-1, 3);

        // expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });
    it('swapping with the same valid number for both indexes', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(1, 1);

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        // expect(myList.swap()).to.equal(false);
    });
    it('modify list when swapping with the same valid number for both indexes', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(1, 1);

        // expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });
    it('swapping with the same invalid number for both indexes', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(-1, -1);

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        // expect(myList.swap()).to.equal(false);
    });
    it('modify list when swapping with the same invalid number for both indexes', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(-1, -1);

        // expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });

    it('swapping with the valid numbers when index1 > index2 ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(3, 1);

        expect(myList.toString()).to.equal('3, 2, 777, hey');
        // expect(myList.swap()).to.equal(false);
    });
    it('modify list when swapping with the valid numbers when index1 > index2 ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(3, 1);

        // expect(myList.toString()).to.equal('3, 2, 777, hey');
        expect(myList.swap()).to.equal(false);
    });
    it('swapping with index1 = 0 and index2 > index1 ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(0, 1);

        expect(myList.toString()).to.equal('hey, 3, 777, 2');
        // expect(myList.swap()).to.equal(true);
    });
    it('modify list when swapping with index1 = 0 and index2 > index1 ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(0, 1);

        // expect(myList.toString()).to.equal('hey, 3, 777, 2');
        expect(myList.swap()).to.equal(false);
    });
    it('swapping with index1 = 0 and index2 = 0 ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(0, 0);

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        // expect(myList.swap()).to.equal(false);
    });
    it('modify list when swapping with index1 = 0 and index2 = 0 ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(0, 0);

        // expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });
    it('swapping with index1 = data.length and index2 is valid ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(4, 0);

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        // expect(myList.swap()).to.equal(false);
    });
    it('modify list when swapping with index1 = data.length and index2 is valid ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(4, 0);

        // expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });
    it('swapping with index2 = data.length and index1 is valid ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(0, 4);

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        // expect(myList.swap()).to.equal(false);
    });

    it('modify list when swapping with index2 = data.length and index1 is valid ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(0, 4);

        // expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });

    it('swapping with index1 string and index2 is valid ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap('hi', 0);

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        // expect(myList.swap()).to.equal(false);
    });
    it('modify the list when swapping with index1 string and index2 is valid ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap('hi', 0);

        // expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });
    it('swapping with index2 string and index1 is valid ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(2, 'hi');

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        // expect(myList.swap()).to.equal(false);
    });
    it('modify the list when swapping with index2 string and index1 is valid ', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(2, 'hi');

        // expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });
    it('swapping with index2 and index1 strings', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap('hey', 'hi');

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        // expect(myList.swap()).to.equal(false);
    });
    it('modify the list when swapping with index2 and index1 strings', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap('hey', 'hi');

        // expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });

    it('swapping with index1 string and index2 valid number', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap('0', 1);

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        // expect(myList.swap()).to.equal(false);
    });
    it('modify the list when swapping with index1 string and index2 valid number', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap('0', 1);

        // expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });
    it('swapping with index1 number and index2 string', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(0, '1');

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        // expect(myList.swap()).to.equal(false);
    });
    it('modify the list when swapping with index1 number and index2 string', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(0, '1');

        // expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });

    it('swapping with fraction index1 number and index2 valid', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(1.2, 3);

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });
    it('swapping with fraction index2 number and index1 valid', function () {
        myList.add('3');
        myList.add('hey');
        myList.add('777');
        myList.add(2);
        myList.swap(1, 3.5);

        expect(myList.toString()).to.equal('3, hey, 777, 2');
        expect(myList.swap()).to.equal(false);
    });
});