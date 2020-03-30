/*
1. Write a function which receives an array and a number as arguments and returns a
new array from the elements of the given array which are larger than the given
number.
 */

function getLargerElements(arr, number) {
    let result = [];
    for (let i in arr) {
        if (arr[i] > number) {
            result.push(arr[i]);
        }
    }

    return result.length == 0 ? 'Such values do not exist.' : result

}

console.log(getLargerElements([1, 1, 2, -3, 0, 8, 4, 0], 9));

/*
2. Write a function, which receives two numbers as arguments and finds all numbers
between them such that each digit of the number is even. The numbers obtained should be
printed in a comma-separated sequence on a single line.
 */

function getEvenNumbers(start, end) {
    let newArr = [];
    for (let i = start; i <= end; i++) {
        let str = i.toString();
        let count = 0;
        for (let j in str) {
            if (str[j] % 2 != 0) {
                break;
            }
            count++
        }
        if (count == str.length) {
            newArr.push(i);
        }
    }

    return newArr.length == 0 ? 'Such numbers does not exist.' : newArr.join(',')

}

console.log(getEvenNumbers(19, 42));


/*
3. Given an array of numbers which is almost sorted in ascending order.  Find the index
where sorting order is violated.
harc for let i in ov chi ashxatum
 */

function findViolatedIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1]) {
            if (arr[i] > arr[i + 1]) {
                return i + 1;
            }
        }

    }
    return -1;
}

console.log(findViolatedIndex([2, 12, 15, 48, 64]));

/*
4. Given an array of integers, find the pair of adjacent elements that has the largest
product and return that product.
 */

function getMaxProduct(arr) {

    let max = -Infinity;
    let pairObj = {};

    for (let i = 0; i < arr.length; i++) {

        if (arr[i + 1]) {
            let temp = arr[i] * arr[i + 1];
            if (temp > max) {
                max = temp;
                pairObj.start = arr[i];
                pairObj.end = arr[i + 1];
            }
        }


    }
    return pairObj;

}

console.log(getMaxProduct([1, 2, 8, 9, 7]));

/*
5.Given an array of integers. All numbers are unique. Find the count of missing
numbers between minimum and maximum elements to make integers sequence.
 */

function missingNumbers(arr) {
    arr = arr.sort();
    let min = arr[0];
    let max = arr[arr.length - 1];
    let realLength = max - min + 1;
    let arrLength = arr.length;
    return realLength - arrLength;
}

console.log(missingNumbers([6, 1, 4, 8]));


/*
6.Given an array consisting from the arrays of numbers (like a two-dimensional array).
Find sum of each row and print them as an array
 */

function getSum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        result.push(sum);
    }

    return result;
}

console.log(getSum([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));
console.log(getSum([[1], [2], [3], [4]]));

/*
7. Given an array of integers. Write a function that return new array from first array,
where removed even numbers, and odd numbers was multiplied with new array length
 */

function getOdds(arr) {
    if (arr.length) {
        let result = arr.filter(word => word % 2 != 0);
        result = result.map(function (num) {
            return num * result.length;
        });
        return result;

    }
    return [];
}

console.log(getOdds([5, 4, 78, 0, -3, 7]));
console.log(getOdds([2, 4, 6, 88]));
console.log(getOdds([[]]));