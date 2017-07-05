(function solve() {
    Array.prototype['last'] = function (n) {
        return this[this.length - 1];
    };

    Array.prototype['skip'] = function (n) {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    };

    Array.prototype['take'] = function (n) {
        let result = [];
        for (let i = n; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    };

    Array.prototype['sum'] = function (n) {
        let result = 0;
        for (let i = n; i < this.length; i++) {
            result +=this[i];
        }
        return result;
    };

    Array.prototype['average'] = function (n) {
        return this.sum() / this.length;
    };
})()

// solution();