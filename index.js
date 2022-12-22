// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Sum All Odd Fibonacci Numbers</h1>`;

/**
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 *
 * The first two numbers in the Fibonacci sequence are 1 and 1.  Every additional number in the sequence is the sum of the two previous numbers.  The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 *
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3 and 5.
 */

function sumFibs(num) {
  const fib = new Array(num + 2);
  const oddFib = [];
  let sum = 0;
  fib[0] = 0;
  fib[1] = 1;
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    oddFib[0] = fib[0];
    if (fib[i] % 2 == 1) {
      oddFib.push(fib[i]);
    }
  }
  for (let j = 0; j < oddFib.length; j++) {
    if (oddFib[j] <= num && oddFib[j] > 0) {
      sum += oddFib[j];
    }
  }
  if (sum == 0) {
    sum += 1;
  }
  return sum;
}

console.log(sumFibs(1));
console.log(sumFibs(4));
console.log(sumFibs(15));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
