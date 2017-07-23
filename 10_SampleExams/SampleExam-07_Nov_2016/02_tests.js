let expect = require('chai').expect;
let list = require('./02_AddDeleteInList');

describe('Testing main functionality', function () {
    let list;

    beforeEach(function () {
        list = (function () {
            let data = [];
            return {
                add: function (item) {
                    data.push(item);
                },
                delete: function (index) {
                    if (Number.isInteger(index) && index >= 0 && index < data.length) {
                        return data.splice(index, 1)[0];
                    } else {
                        return undefined;
                    }
                },
                toString: function () {
                    return data.join(", ");
                }
            };
        })();
    });
    describe('Unit Tests', function () {
        it('methods exist', function () {
            expect(list.add).to.exist;
            expect(list.delete).to.exist;
            expect(list.toString).to.exist;
        });
        //testing ADD
        it('adding one element', function () {
            list.add(3);
            expect(list.toString()).to.equal('3');
        });
        it('adding many elements', function () {
            list.add(1);
            list.add(3);
            list.add('two');
            list.add('hi');
            expect(list.toString()).to.equal('1, 3, two, hi');
        });

        //testing DELETE
        it('deleting from an empty list', function () {
            list.delete(0);
            expect(list.toString()).to.equal('');
            // expect(list.delete()).to.equal(undefined);
        });
        it('deleting from an empty list returning delete', function () {
            // list.delete(0);
            // expect(list.toString()).to.equal('');
            expect(list.delete(0)).to.equal(undefined);
        });
        it('deleting from a list with valid index', function () {
            list.add(1);
            list.add(3);
            list.add('two');
            list.delete(2);
            expect(list.toString()).to.equal('1, 3');

        });
        it('deleting from a list with valid index return delete', function () {
            list.add(1);
            list.add(3);
            list.add('two');

            // expect(list.toString()).to.equal('1, 3');
            expect(list.delete(2)).to.equal('two');
        });
        it('deleting multiple times from a list with the same valid index', function () {
            list.add(1);
            list.add(3);
            list.add('two');
            list.delete(1);
            list.delete(1);
            expect(list.toString()).to.equal('1');
            // expect(list.delete(1)).to.equal('3');
            // expect(list.delete(1)).to.equal('two');
        });
        it('deleting multiple times from a list with the same valid index returning delete', function () {
            list.add(1);
            list.add(3);
            list.add('two');
            // expect(list.toString()).to.equal('1');
            expect(list.delete(1)).to.equal(3);
            expect(list.delete(1)).to.equal('two');
        });
        it('deleting multiple times from a list with valid index', function () {
            list.add(1);
            list.add(3);
            list.add('two');
            list.delete(0);
            list.delete(1);
            expect(list.toString()).to.equal('3');
        });
        it('deleting multiple times from a list with valid index returning delete', function () {
            list.add(1);
            list.add(3);
            list.add('two');
            expect(list.delete(0)).to.equal(1);
            expect(list.delete(1)).to.equal('two');
        });
        it('deleting with invalid index', function () {
            list.add(1);
            list.add(3);
            list.add('two');
            list.delete(3);

            expect(list.toString()).to.equal('1, 3, two');
            expect(list.delete()).to.equal(undefined);
        });
        it('deleting with negative index', function () {
            list.add(1);
            list.add(3);
            list.add('two');
            list.delete(-3);

            expect(list.toString()).to.equal('1, 3, two');
            expect(list.delete()).to.equal(undefined);
        });
        it('deleting with invalid index bigger than the length of the list', function () {
            list.add(1);
            list.add(3);
            list.add('two');
            list.delete(4);

            expect(list.toString()).to.equal('1, 3, two');
            expect(list.delete()).to.equal(undefined);
        });
    });
});