import { File } from "../tasks/6";

describe('class File', function () {
    describe('fullName', function () {
        const myFile = new File("hello.txt", "Hello World");

        test("should return fullName", () => {
            expect(myFile.fullName).toBe('hello.txt');
        });
        // test("should not mutate initial fullName", () => {
        //     myFile.fullName = "goodbye.txt";
        //     expect(myFile.fullName).toBe('hello.txt');
        // });
    });

    describe('filename', function () {
        const myFile = new File("hello_world.txt", "Hello World");

        test("should return fileName", () => {
            expect(myFile.filename).toBe('hello_world');
        });
        // test("should not mutate initial fileName", () => {
        //     myFile.filename = "goodbye_world";
        //     expect(myFile.filename).toBe('hello_world.txt');
        // });
    });

    describe('extension', function () {
        const myFile = new File("class.phptester.php", "<?php /* Some PHP code here */ ?>");

        test("should return extension", () => {
            expect(myFile.extension).toBe('php');
        });
        // test("should not mutate initial extension", () => {
        //     myFile.extension = "txt";
        //     expect(myFile.extension).toBe('php');
        // });
    });

    describe('getContents and write methods', function () {
        const myFile = new File("example.txt", "");

        test("should return content", () => {
            expect(myFile.getContents()).toBe('');
        });
        test("should return new content after write method", () => {
            myFile.write("Line 1");
            expect(myFile.getContents()).toMatch('Line 1');
        });
        test("should return new content after new write method", () => {
            myFile.write("Line 2");
            expect(myFile.getContents()).toMatch('Line 1\nLine 2');
        });
    });

    describe('gets', function () {
        const str = "Line 1\nLine 2\nLine 3\nLine 4\nLine 5";
        const myFile = new File("example.txt", str);

        test("should return separate content word one by one", () => {
            expect(myFile.gets()).toMatch(/Line 1/);
        });
        test("should return undefined when words are end up", () => {
            for (let i = 0; i　< str.split('\n').length; i++ ) {
                myFile.gets();
            }
            expect(myFile.gets()).toBe('undefined');
        });
    });

    describe('getc', function () {
        const str = "Lorem ipsum dolor sit amet, adispicing eu.";
        const myFile = new File("example.txt", str);

        test("should return separate letter one by one", () => {
            expect(myFile.getc()).toBe('L');
        });
        test("should return undefined after every letter in content has passed by", () => {
            for (let i = 0; i　< str.length; i++ ) {
                myFile.getc();
            }
            expect(myFile.getc()).toBe('undefined');
        });
    });
});