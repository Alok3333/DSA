let number = 923492311;

// Using Algorithm
let result = 0;
while(number > 0) {
    let rem = number % 10;
    result = result * 10 + rem;
    number = Math.floor(number/10);
}

console.log(result);