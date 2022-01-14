// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

export class Ball {
    type: string;

    constructor(type?: string) {
        this.type = type ? type : 'regular';
    }

    get ballType(): string {
        return this.type
    }
}