let expect = require('chai').expect;
// let jsdom = require('jsdom-global')();
// let $ = require('jquery');
let SortedList= require('../sortedList').SortedList;

describe("Sorted List Unit Tests", function () {
    let myList;
    beforeEach(function () {
        myList = new SortedList();
    });

    describe("Test initial state", function () {
        it('check if get exists', function () {
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
        });
        it('check if add exists', function () {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
        });
        it('check if remove exists', function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
        });
        it('check if size exists', function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
        });
    });
    describe("Test add function", function () {
        it('adding one element', function () {
            myList.add(3);
            expect(myList.list.join(', ')).to.equal('3');
        });
        it('adding many elements', function () {
            myList.add(3);
            myList.add(9);
            myList.add(1);
            myList.add(4);

            expect(myList.list.join(', ')).to.equal('1, 3, 4, 9');
        });
    });
    describe("Test remove function", function () {
        it('removing one element with correct index', function () {
            myList.add(3);
            myList.remove(0);
            expect(myList.list.join(', ')).to.equal('');
        });
        it('removing element and keeping the list sorted', function () {
            myList.add(3);
            myList.add(9);
            myList.add(1);
            myList.add(4);
            myList.remove(2);

            expect(myList.list.join(', ')).to.equal('1, 3, 9');
        });
        it('trying to remove from an empty list', function () {
            expect(() => myList.remove()).throw(Error, 'Collection is empty.');
        });
        it('trying to remove from a list with invalid index', function () {
            myList.add(3);
            myList.add(9);
            myList.add(1);
            myList.add(4);

            expect(() => myList.remove(4)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('trying to remove from a list with negative index', function () {
            myList.add(3);
            myList.add(9);
            myList.add(1);
            myList.add(4);

            expect(() => myList.remove(-1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
    });
    describe("Test get function", function () {
        it('trying to get from an empty list', function () {
            expect(() => myList.get(0)).throw(Error, 'Collection is empty.');
        });
        it('getting a single element', function () {
            myList.add(3);
            expect(myList.get(0)).to.equal(3);
        });
        it('trying to get from a list with negative index', function () {
            myList.add(3);
            myList.add(9);
            myList.add(1);
            myList.add(4);

            expect(() => myList.get(-1)).throw(Error, 'Index was outside the bounds of the collection.');
        });
        it('trying to get from a list with invalid index', function () {
            myList.add(3);
            myList.add(9);
            myList.add(1);
            myList.add(4);

            expect(() => myList.get(5)).throw(Error, 'Index was outside the bounds of the collection.');
        });
    });
    describe("Test size function", function () {
        it('getting the size of the list', function () {
            myList.add(3);
            myList.add(9);
            myList.add(1);
            myList.add(4);
            expect(myList.size).to.equal(4);
        });
    });
});