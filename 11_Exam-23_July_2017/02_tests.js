let expect = require('chai').expect;
let Sumator = require('./02_SumatorClass').Sumator;

describe("Sumator Class Unit Tests", function () {
    let myList;
    beforeEach(function () {
        myList = new Sumator();
    });
    describe("Test properties exist", function () {
       it('check add exists', function () {
           expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true);
       });
        it('check sumNums exists', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true);
        });
        it('check removeByFilter exists', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true);
        });
        it('check toString exists', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true);
        });
    });
    describe("Test functionality", function () {
        it('Testing add function with number', function () {
            myList.add(2);

            expect(myList.toString()).to.equal('2');
        });
        it('Testing add function with string', function () {
            myList.add('hi');

            expect(myList.toString()).to.equal('hi');
        });
        it('Testing add function with many parameters', function () {
            myList.add(7);
            myList.add(2);
            myList.add('3');
            myList.add('hi');
            expect(myList.toString()).to.equal('7, 2, 3, hi');
        });
    });
    describe('Testing sumNums functionality', function () {
        it('sumNums with a list of numbers only', function () {
            myList.add(7);
            myList.add(2);
            expect(myList.sumNums()).to.equal(9);
        });
        it('sumNums with a list of fraction numbers and whole numbers', function () {
            myList.add(1.5);
            myList.add(2.3);
            myList.add(1);
            expect(myList.sumNums()).to.equal(4.8);
        });
        it('sumNums with a list of numbers and strings', function () {
            myList.add(7);
            myList.add(2);
            myList.add('3');
            myList.add('hi');
            expect(myList.sumNums()).to.equal(9);
        });
        it('sumNums with a list of fraction numbers and strings', function () {
            myList.add(7);
            myList.add(2.2);
            myList.add('3');
            myList.add('hi');
            expect(myList.sumNums()).to.equal(9.2);
        });
        it('sumNums in an empty list', function () {

            expect(myList.sumNums()).to.equal(0);
        });
        it('sumNums in a list with strings only', function () {
            myList.add('dsad');
            myList.add('dsdsaaa');
            myList.add('hjr');
            myList.add('7');

            expect(myList.sumNums()).to.equal(0);
        });
    });
    describe('Testing removeByFilter functionality', function () {
        it('removing matched numbers', function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.add(4);
            myList.add(5);
            myList.add(6);
            myList.removeByFilter(x => x % 2 === 0);

            expect(myList.toString()).to.equal('1, 3, 5');
        });
        it('trying to remove with no matched numbers', function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.add(4);
            myList.add(5);
            myList.add(6);
            myList.removeByFilter(x => x % 7 === 0);

            expect(myList.toString()).to.equal('1, 2, 3, 4, 5, 6');
        });
        it('removing matched strings', function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.add(4);
            myList.add(5);
            myList.add('hello');
            myList.removeByFilter(x => x === 'hello');

            expect(myList.toString()).to.equal('1, 2, 3, 4, 5');
        });
        it('trying to remove with no matched strings', function () {
            myList.add(1);
            myList.add(2);
            myList.add('3');
            myList.add(4);
            myList.add(5);
            myList.add('hi');
            myList.removeByFilter(x => x === 'hello');
            expect(myList.toString()).to.equal('1, 2, 3, 4, 5, hi');
        });
        it('trying to remove a single number', function () {
            myList.add(1);
            myList.add(2);
            myList.add('3');
            myList.add(4);
            myList.add(5);
            myList.add('hi');
            myList.removeByFilter(x => x === 5);
            expect(myList.toString()).to.equal('1, 2, 3, 4, hi');
        });
    });
    describe('Testing toString functionality', function () {
        it('Testing empty list', function () {
            expect(myList.toString()).to.equal('(empty)');
        });
        it('Testing with a non-empty list', function () {
            myList.add(1);
            myList.add(2);
            myList.add('3');
            expect(myList.toString()).to.equal('1, 2, 3');
        });

    });
});