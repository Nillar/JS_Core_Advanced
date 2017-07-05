function fibonacci(n) {
    let f1 = 0;
    let f2 = 1;

    let result = [];

    for (let i = 0; i < n; i++) {
        let f3 = f1 + f2;
        f1 = f2;
        f2 = f3;

        result.push(f1);
    }

    return result.join(', ');
}

console.log(fibonacci(5));

function getFibonator() {
    let f1 = 0;
    let f2 = 1;

    return function () {
        let f3 = f1 + f2;
        f1 = f2;
        f2 = f3;

        return f1;
    };
}

let fib = getFibonator();
fib();
fib();
fib();
fib();
fib();