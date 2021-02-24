const fizzBuzz = require('../index');

describe('FizzBuzz', () => {
    it('Should return one if receive one', () => {
        const expected = 1;
        const result = fizzBuzz(1);

        expect(result).toBe(expected);
    });

    it('Should return fizz if receive three', () => {
        const expected = 'fizz';
        const result = fizzBuzz(3);

        expect(result).toBe(expected);
    });

    it('Should return buzz if receive five', () => {
        const expected = 'buzz';
        const result = fizzBuzz(5);

        expect(result).toBe(expected);
    });

    it('Should return fizzbuzz if receive fifteen', () => {
        const expected = 'fizzbuzz';
        const result = fizzBuzz(15);

        expect(result).toBe(expected);
    });

    it('Should return fizz if receive any number divisible by three', () => {
        const expected = 'fizz';
        const result = fizzBuzz(9);

        expect(result).toBe(expected);
    });

    it('Should return buzz if receive any number divisible by five', () => {
        const expected = 'buzz';
        const result = fizzBuzz(25);

        expect(result).toBe(expected);
    });

    it('Should return fizzbuzz if receive any number divisible by thirty', () => {
        const expected = 'fizzbuzz';
        const result = fizzBuzz(30);

        expect(result).toBe(expected);
    });

    it('Should return the same number if receive any number that is not divisible by 3, 5, or both', () => {
        const expected = 4;
        const result = fizzBuzz(4);

        expect(result).toBe(expected);
    });
});