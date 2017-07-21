let expect = require('chai').expect;
let makeList = require('../02_ListAddLeftRightClear');

describe('Testing main functionality', function () {
    let myList = {};

    beforeEach(function () {
        myList = makeList();
    });

    it("should contain all properties", function () {
        expect(myList.addLeft).to.exist;
        expect(myList.addRight).to.exist;
        expect(myList.clear).to.exist;
        expect(myList.toString).to.exist;
    });

    // addLeft
    it('adding left one element in an empty list', function () {
        myList.addLeft('3');
        expect(myList.toString()).to.equal('3');
    });
    it('adding to the left many elements in an empty list', function () {
        myList.addLeft('3');
        myList.addLeft('4');
        myList.addLeft('5');
        myList.addLeft('1');

        expect(myList.toString()).to.equal('1, 5, 4, 3');
    });
    it('adding to the left many elements from different types in an empty list', function () {
        myList.addLeft('3');
        myList.addLeft(1);
        myList.addLeft('beer');
        myList.addLeft('1');

        expect(myList.toString()).to.equal('1, beer, 1, 3');
    });

    //addRight
    it('adding right one element in an empty list', function () {
        myList.addRight('3');
        expect(myList.toString()).to.equal('3');
    });
    it('adding to the right many elements in an empty list', function () {
        myList.addRight('3');
        myList.addRight('4');
        myList.addRight('5');
        myList.addRight('1');

        expect(myList.toString()).to.equal('3, 4, 5, 1');
    });
    it('adding to the right many elements from different types in an empty list', function () {
        myList.addRight(3);
        myList.addRight('4');
        myList.addRight('5');
        myList.addRight('hello');

        expect(myList.toString()).to.equal('3, 4, 5, hello');
    });
    //adding left and right at the same time
    it('adding elements to the left and right', function () {
        myList.addRight('1');
        myList.addLeft('2');
        myList.addRight('3');
        myList.addLeft('4');
        myList.addLeft('5');
        myList.addRight('6');

        expect(myList.toString()).to.equal('5, 4, 2, 1, 3, 6');
    });

    //clear
    it('clearing an empty list', function () {
        myList.clear();
        expect(myList.toString()).to.equal('');

    });
    it('clearing a non-empty list', function () {
        myList.addRight('1');
        myList.addLeft('2');
        myList.addRight('3');
        myList.addLeft('4');
        myList.addLeft('5');
        myList.addRight('6');
        myList.clear();
        expect(myList.toString()).to.equal('');

    });
});