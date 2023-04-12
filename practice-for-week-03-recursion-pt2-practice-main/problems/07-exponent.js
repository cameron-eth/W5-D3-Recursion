/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4(num)^3(pow) = 4 x 4 x 4 = 64 //return 4 * exponent(4, 2) // return 4 * 4 * exponent(4, 1)

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64. //if pow is negative, n = 1/n; make pow positive, decrease (3,2,1) n = 1/n
4^0 = 0
4^1 = 4 // stop when pow is 1
Examples:

exponent(3, 2); // 9
num: 3
power: 2
return num * exponent(3,1) = num * num
exponent(2, -2); // 1/4 (or 0.25)
num: 2
power: -2
return 1/num * num
exponent(5, 5); // 3125
***********************************************************************/

function exponent(num, power) {
    // Your code here
    //base case
    // if (power === 1) return num;
    // if (power === -1) return 1 / num;
    // //recursive case/step
    // if (power < 0) { //power is neg
    //     return 1 / num * exponent(num, power + 1) //return 1/n * exponent(num,power) // 1/n * 1/n ..
    // }
    // if (power > 0) { // power is pos
    //     return num * exponent(num, power - 1); // n * n * n
    // }

    if (power < 0) {
        num = 1 / num;
        power *= -1;
    }
    if (power === 1) return num;
    if (power > 0) {
        return num * exponent(num, power - 1);
    }


}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = exponent;
} catch (e) {
    module.exports = null;
}
