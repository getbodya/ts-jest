// This kata is designed to test your ability to extend the functionality of built-in classes.
// In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values;
//          on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// @ts-ignore
Array.prototype.square = function (): number[] {
    return this.map((val) => val * val)
}

// @ts-ignore
Array.prototype.cube = function (): number[] {
    return this.map((val) => Math.pow(val, 3))
}
// @ts-ignore
Array.prototype.average = function (): number | NaN {
    return !this.length ? NaN : this.reduce((acc, val) => acc + val, 0) / this.length
}
// @ts-ignore
Array.prototype.sum = function (): number {
    return this.reduce((acc, val) => acc + val, 0)
}
// @ts-ignore
Array.prototype.even = function (): number[] {
    return this.filter((val) => val%2 == 0)
}
// @ts-ignore
Array.prototype.odd = function (): number[] {
    return this.filter((val) => val%2 != 0)
}

export const awesomeArray = new Array(1, 2, 3)
