// Fun with ES6 Classes #6 - Fake Files (Basic)
// Kata and Series Overview
// In Kata #1-4 in this series, we learned the fundamentals and features of ES6 classes including ES6 class syntax, classical inheritance in ES6 (as opposed to prototypal inheritance in all previous versions of ECMAScript/Javascript), getters and setters. In Kata #5 of this Series we began to apply our knowledge of ES6 classes to solve the challenge, but the challenge was still a bit Codecademy-like (traning level code) and did not resemble a real world application. Therefore, in this Kata of the series, we are going to apply our knowledge of ES6 class syntax and features in a semi-real world application.

// Task
// You will be defining a class File (ES6 syntax please :) ) with the following properties and methods:

// Properties
// fullName
// filename
// extension
// Methods
// getContents()
// write(str)
// gets()
// getc()
// Your File class should exhibit the following behaviour:

// Constructor
// Your constructor should accept two arguments in the following order: fullName and contents, where fullName is the full name of the file (including file extension) and contents is the file contents.

// An instance of your File class should exhibit the following behaviour:

// fullName (property)
// Should contain the full name of the file, including the file extension. Please note that the fullName property should be read-only, which means that attempts to reassign fullName a new value should fail and it should retain its original value. For example:

// var myFile = new File("hello.txt", "Hello World");
// console.log(myFile.fullName); // hello.txt
// myFile.fullName = "goodbye.txt"; // Reassignment should fail
// console.log(myFile.fullName); // still "hello.txt"

// filename (property)
// Should contain the name of the file, excluding the file extension. Should also be read-only which means reassignment attempts should fail. E.g.

// var file1 = new File("hello_world.txt", "Hello World");
// console.log(file1.filename); // "hello_world"
// file1.filename = "goodbye_world"; // Reassignment should fail
// console.log(file1.filename); // still "hello_world"

// var file2 = new File("class.phptester.php", "<?php /* Some PHP code here */ ?>");
// console.log(file2.filename); // "class.phptester" - the filename should be correctly identified even if the filename itself contains the '.' character

// extension (property)
// Should contain the file extension. Read-only. E.g.

// var fileWithComplexName = new File("alpha.beta.gamma.delta.txt", "alpha beta gamma delta");
// console.log(fileWithComplexName.extension); // "txt"
// fileWithComplexName.extension = "js"; // Reassignment should fail
// console.log(fileWithComplexName.extension); // still "txt"

// getContents (method)
// Should return the contents of the file every time. E.g.

// var myFile = new File("hello.txt", "Hello World\nHello World");
// console.log(myFile.getContents()); // "Hello World\nHello World"

// write (method)
// Should accept exactly 1 argument str, the new content to be written to the file. The new content should be written on a new line on the file. For example:

// var myFile = new File("example.txt", "");
// console.log(myFile.getContents()); // ""
// myFile.write("Line 1");
// console.log(myFile.getContents()); // "Line 1"
// myFile.write("Line 2");
// console.log(myFile.getContents()); // "Line 1\nLine 2"
// myFile.write("Line 3");
// console.log(myFile.getContents()); // "Line 1\nLine 2\nLine 3"

// gets (method)
// Returns a line on the file, starting on Line 1. Successive calls to the method should return successive lines on the file. If the number of calls exceeds the number of lines on the file, simple return undefined. E.g.:

// var myFile = new File("example.txt", "Line 1\nLine 2\nLine 3\nLine 4\nLine 5");
// console.log(myFile.gets()); // "Line 1"
// console.log(myFile.gets()); // "Line 2"
// console.log(myFile.gets()); // "Line 3"
// console.log(myFile.gets()); // "Line 4"
// console.log(myFile.gets()); // "Line 5"
// console.log(myFile.gets()); // undefined
// console.log(myFile.gets()); // undefined
// console.log(myFile.gets()); // undefined

// getc (method)
// Should return a character on the file, starting from the first character. Successive calls should return successive characters on the file. If the number of calls exceeds the number of characters on the file, it should simply return undefined. Example:

// var myFile = new File("Lorem Ipsum.txt", "Lorem ipsum dolor sit amet, adispicing eu.");
// console.log(myFile.getc()); // "L"
// console.log(myFile.getc()); // "o"
// console.log(myFile.getc()); // "r"
// console.log(myFile.getc()); // "e"
// console.log(myFile.getc()); // "m"
// console.log(myFile.getc()); // " "
// console.log(myFile.getc()); // "i"
// console.log(myFile.getc()); // "p"
// // ... (many calls to myFile.getc())
// console.log(myFile.getc()); // undefined (when number of calls exceeds character count)

// Note regarding filenames
// For the purposes of this Kata, all filenames used in this Kata will be valid filenames. Valid filenames are summarized as follows:

// Contains a filename and extension (e.g. LICENSE.txt is a valid filename, LICENSE is not)
// Filename contains only alphanumeric characters (both uppercase and lowercase), underscores, spaces and/or dots (e.g. index.php, class.phptester.php, alpha beta.gamma_delta01.complicatedExample.txt are all valid filenames).
// Edge cases will not be considered (e.g. successive dots - Hello World..txt - will not appear in the test cases)
// Extension contains only lowercase alphanumeric characters (e.g. txt, php, php3 are all valid)

// Note regarding file content
// All file content will be valid. In this Kata, valid file content may include alphanumeric characters (uppercase or lowercase), underscores, ordinary whitespace, punctuation or mathematical symbols, in which each line will be separated from the next by a newline character ("\n").
// There will not be tabs or other whitespace/newline characters other than "\s" (spacebar) or "\n" and the contents of any file will not start or end with a newline. You may also assume that when the tests use the write(str) method, the string str will not contain newline characters itself.




interface IFile {
    lineNumber: number;
    letterNumber: number;
    readonly filename: string;
    readonly fullName: string;
    readonly extension: string;
    readonly contents: string[];
    readonly wholeContents: string;
    getContents: () => string;
    write: (string: string) => void;
    gets: () => string;
    getc: () => string;
}

export class File implements IFile {
    lineNumber = 0;
    letterNumber = 0;
    readonly filename: Readonly<string>;
    readonly fullName: Readonly<string>;
    readonly extension: string;
    readonly contents: string[] = [];
    readonly wholeContents: string;

    constructor(fullName: string, content: string) {
        this.fullName = fullName;

        this.extension = fullName.split('.').pop() || '';
        this.filename = fullName.split(new RegExp(`(.${this.extension})$`))[0];

        this.contents.push(content);
        this.wholeContents = this.contents.join('');

        const { lineNumber, letterNumber, contents, ...rest } = this;
        Object.freeze(rest);
    }

    getContents(): string {
        return this.contents.join('\n');
    }

    write(string: string) {
        this.contents.push(string)
    }

    gets(): string {
        const result = this.contents[this.lineNumber] ?? 'undefined';
        this.lineNumber++;
        return result;
    }

    getc(): string {
        const result = this.wholeContents[this.letterNumber] ?? 'undefined';
        this.letterNumber++;
        return result;
    }
}


// Alternative:
// export class File2 implements IFile {
//     private _fullName: string;
//     private _extension: string;
//     private _filename: string;
//
//     constructor(fullName: string, contents: string) {
//         this._fullName = fullName;
//         this._extension = fullName.split('.').pop() || '';
//         this._filename = fullName.split(new RegExp(`(.${this.extension})$`))[0];
//         // ....
//     }
//
//     get fullName(): string {
//         return  this._fullName;
//     }
//     get extension(): string {
//         return  this._extension;
//     }
//     get filename(): string {
//         return  this._extension;
//     }
// }

const myFile = new File("hello.txt", "Hello World");
console.log(myFile.fullName); // hello.txt
// myFile.fullName = "goodbye.txt"; // Reassignment should fail
// console.log('again', myFile.fullName); // still "hello.txt"

const file1 = new File("hello_world.txt", "Hello World");
console.log(file1.filename); // "hello_world"
// file1.filename = "goodbye_world"; // Reassignment should fail
// console.log('again', file1.filename); // still "hello_world"

const file2 = new File("class.phptester.php", "<?php /* Some PHP code here */ ?>");
console.log(file2.extension); // php

const fileWithComplexName = new File("alpha.beta.gamma.delta.txt", "alpha beta gamma delta");
console.log(fileWithComplexName.extension); // "txt"
// fileWithComplexName.extension = "js"; // Reassignment should fail
// console.log('again', fileWithComplexName.extension); // still "txt"

const myFile2 = new File("hello.txt", "Hello World\nHello World");
console.log(myFile2.getContents()); // "Hello World\nHello World"

const file3 = new File("example.txt", "");
console.log(file3.getContents()); // ""
file3.write("Line 1");
console.log(file3.getContents()); // "Line 1"
file3.write("Line 2");
console.log(file3.getContents()); // "Line 1\nLine 2"
file3.write("Line 3");
console.log(file3.getContents()); // "Line 1\nLine 2\nLine 3"

const file4 = new File("example.txt", "Line 1\nLine 2\nLine 3\nLine 4\nLine 5");
console.log(file4.gets()); // "Line 1"
console.log(file4.gets()); // "Line 2"
console.log(file4.gets()); // "Line 3"
console.log(file4.gets()); // "Line 4"
console.log(file4.gets()); // "Line 5"
console.log(file4.gets()); // undefined
console.log(file4.gets()); // undefined
console.log(file4.gets()); // undefined

const str = "Lorem ipsum dolor sit amet, adispicing eu.";
const file5 = new File("Lorem Ipsum.txt", str);
for (let i = 0; i　< str.length; i++ ) {
    console.log(file5.getc());
}
console.log(file5.getc()); // undefined