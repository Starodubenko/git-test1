const find = require('./tree');

var a = [7, 8, 5, 10, 11, 1, 11, 111, 2];

for (var startEqualingIndex = 0; startEqualingIndex < a.length; startEqualingIndex++) {
    for (var currentEqualingIndex = 0; a.length - startEqualingIndex > currentEqualingIndex; currentEqualingIndex++) {
        if (a[currentEqualingIndex] > a[currentEqualingIndex + 1]) {
            var number = a[currentEqualingIndex];
            a[currentEqualingIndex] = a[currentEqualingIndex + 1];
            a[currentEqualingIndex + 1] = number;
        }
    }
}

a.forEach(function (item) {
    // console.log(item)
});

console.log(find('a ab adc abcd abcde abcdef bc bcd cd cde cdf ', 'abcde'));