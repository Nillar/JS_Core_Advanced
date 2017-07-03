// function aggregates(arr) {
//     function reduce(arr, calcAggr) {
//         let result = [0];
//         for (let nextElement of arr.slice(1)) {
//             result = calcAggr(result, nextElement);
//         }
//         return result;
//     }
//
//     console.log("Sum = " + reduce(arr, (a, b) => Number(a) + Number(b)));
//     console.log("Min = " + reduce(arr, (a, b) => a < b ? a : b));
//     console.log("Max = " + reduce(arr, (a, b) => a > b ? a : b));
//     console.log("Product = " + reduce(arr, (a, b) => Number(a) * Number(b)));
//     console.log("Join = " + reduce(arr, (a, b) => '' + a + b));
//
// }
// aggregates([2,3,10,5]);

function aggregate(array) {

    console.log(`Sum = ${reduce(array, (a, b) => a + b)}`);
    console.log(`Min = ${reduce(array, (a, b) => a <= b ? a : b)}`);
    console.log(`Max = ${reduce(array, (a, b) => a <= b ? b : a)}`);
    console.log(`Product = ${reduce(array, (a, b) => a * b)}`);
    console.log(`Join = ${reduce(array, (a, b) => '' + a + b)}`);

    function reduce(array, func) {
        let result = array[0];
        for (let i = 1; i < array.length; i++) {
            result = func(result, array[i]);
        }

        return result;
    }
}

aggregate([2,3,10,5]);
