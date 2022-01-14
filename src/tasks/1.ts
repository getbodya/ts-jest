// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

export const missingVowel = (string: string): string => {
    if (!string.length) return '';

    const vowelsInString: Record<string, boolean> = {
        a: false,
        e: false,
        i: false,
        o: false,
        u: false,
    };
    const VOWELS: string[] = Object.keys(vowelsInString);

    string.split('').forEach((letter: string) => {
        if (vowelsInString.hasOwnProperty(letter.toLowerCase())) {
            vowelsInString[letter.toLowerCase()] = true;
        }
    });

    return VOWELS.filter((vowel) => !vowelsInString[vowel]).join(', ');
}

console.log(missingVowel("Bb Smith sent us six neatly arranged range bicycles"))
console.log(missingVowel("John Doe hs seven red pples under his bsket"))
console.log(missingVowel("playground"))