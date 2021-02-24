const { match } = require("x-match-expression");

const fizzBuzz = (n) => {
    const divisibleBy = divider => n => n % divider === 0;

    return match(n)
        .case(divisibleBy(15), "fizzbuzz")
        .case(divisibleBy(3), 'fizz')
        .case(divisibleBy(5), 'buzz')
        .default(n)
}

module.exports = fizzBuzz
