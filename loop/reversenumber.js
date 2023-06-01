let number = 923492311;

// Using Algorithm
let result = 0;
while(number > 0) {
    let rem = number % 10;
    result = result * 10 + rem;
    number = Math.floor(number/10);
}

console.log(result);

// // Without using algorithm
// let result = Number(String(num).split('').reverse().join(''));
// console.log(result);

// // Arrow function for reversing the number

// let reverseNumber = (number) =>
//   parseFloat(number.toString().split('').reverse().join('')) *
//   Math.sign(number);

//   console.log(reverseNumber(32728701));