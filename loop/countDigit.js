let n = 13875789787;

let count = 0;    //Store the count numbers
while (n > 0) {
  let rem = n % 10;      //modulo it will sprete the each number to check every number
  if (rem == 7) {        //checking to number it's same or not
    count++;
  }
  n = Math.floor(n/10);  //remove the rightlast number form n
}

console.log(count);