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
// function getFibonator() {
//
//
//     let f0 = 0, f1 = 1;
//
//
//     return function () {
//
//
//         let f2 = f0 + f1;
//
//
//         f0 = f1;
//
//
//         f1 = f2;
//
//
//         return console.log(f1);
//
//
//     };
//
//
// }
//
//
// let fib = getFibonator();
//
//
// fib(); // 1
//
//
// fib(); // 1
//
//
// fib(); // 2