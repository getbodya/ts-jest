import {missingVowel} from "../tasks/1";
import {middleSymbol} from "../tasks/2";
import {maxAndMinSymbols} from "../tasks/3";
import {Ball} from "../tasks/4";
import {awesomeArray} from "../tasks/5";

describe('missingVowel', function () {
    test("should return vowel 'o' in the string with missing 'o'", () => {
        const str = "Bb Smith sent us six neatly arranged range bicycles";
        expect(missingVowel(str)).toBe('o');
    });

    test("should return vowel 'a' in the string with missing 'a'", () => {
        const str = "John Doe hs seven red pples under his bsket";
        expect(missingVowel(str)).toBe('a');
    });

    test("should return missing vowels", () => {
        const str = "Jhn D hs svn rd ppls undr his bskt";
        expect(missingVowel(str)).toBe('a, e, o');
    });

    test("should return missing vowels in word 'playground'", () => {
        const str = "playground";
        expect(missingVowel(str)).toBe('e, i');
    });
});

describe('middleSymbol', function () {
    test("should return middle symbol in odd string", () => {
        const str = "test";
        expect(middleSymbol(str)).toBe('es');
    });

    test("should return middle symbol in even string", () => {
        const str = "testing";
        expect(middleSymbol(str)).toBe('t');
    });

    test("should return empty string if there was empty string in the argument", () => {
        const str = "";
        expect(middleSymbol(str)).toBe('');
    });
});

describe('maxAndMinSymbols', function () {
    test("should return highest and min number in the string #1", () => {
        const str = "1 2 3 4 5";
        expect(maxAndMinSymbols(str)).toBe('5 1');
    });

    test("should return highest and min number in the string #2", () => {
        const str = "1 2 -3 4 5";
        expect(maxAndMinSymbols(str)).toBe('5 -3');
    });

    test("should return highest and min number in the string #3", () => {
        const str = "1 9 3 4 -5";
        expect(maxAndMinSymbols(str)).toBe('9 -5');
    });

    test("should return highest and min number in the string #4", () => {
        const str = "0 0";
        expect(maxAndMinSymbols(str)).toBe('0 0');
    });
});

describe('Ball', function () {
    test("should return ballType regular", () => {
        const ball = new Ball();
        expect(ball.ballType).toBe('regular');
    });

    test("should return ballType super", () => {
        const ball = new Ball('super');
        expect(ball.ballType).toBe('super');
    });
});

describe('awesomeArray', function () {
    const initialArray = new Array(1, 2, 3);

    test("should return a copy of the array, containing all values squared", () => {
        // @ts-ignore
        expect(awesomeArray.square()).toEqual([1, 4, 9]);
    });

    test("should return a copy of the array, containing all values cubed", () => {
        // @ts-ignore
        expect(awesomeArray.cube()).toEqual([1, 8, 27]);
    });

    test("should return the average of all array values", () => {
        // @ts-ignore
        expect(awesomeArray.average()).toBe(2);
    });
    test("should return NaN on an empty array", () => {
        // @ts-ignore
        expect(new Array().average()).toBe(NaN);
    });

    test("should return the sum of all array values", () => {
        // @ts-ignore
        expect(awesomeArray.sum()).toBe(6);
    });

    test("should return an array of all even numbers", () => {
        // @ts-ignore
        expect(awesomeArray.even()).toEqual([2]);
    });

    test("should return an array of all odd numbers", () => {
        // @ts-ignore
        expect(awesomeArray.odd()).toEqual([1, 3]);
    });

    test("should not modify the initial array", () => {
        expect(awesomeArray).toEqual(initialArray);
    });
});

