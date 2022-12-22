## ALTERNATIVE SOLUTIONS

### Solution 1
```js
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);
```

### Code Explanation
- Create a variable to keep record of the current and previous numbers along with the result that will be returned.
- Use a while loop to make sure we do not go over the number given as parameter.
- We use the modulo operand to check if the current number is odd or even.  If it is odd, add it to the result.
- Complete the Fibonacci circle by rotating getting the next number and swapping values after.
- Return the result.

### REFERENCE LINKS
- [JS while Loop](http://forum.freecodecamp.org/t/javascript-while-loop/14668)

### Solution 2
```js
function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

// test here
sumFibs(4);
```

### Code Explanation
- Create an array of fibonacci numbers till **num**.
- Use `filter()` method to sum the remaining (odd) values.
- Return the sum.

Note that this solution will be slower than Solution 1, as dynamically creating an array is rather slow, especially in JavaScript.

### REFERENCE LINKS
- [JS Array Prototype Push](https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-push-javascript-push-explained-with-examples/14298)
- [JS For Loops Explained](https://forum.freecodecamp.org/t/what-are-for-loops-and-how-do-you-use-them-in-javascript/14670)
- [JS Array Prototype Filter](https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-filter-filter-explained-with-examples/14289)
- [JS Array Prototype Reduce](https://forum.freecodecamp.org/t/how-to-use-the-javascript-array-prototype-reduce-javascript-reduce-explained-with-examples/14299)

### Solution 3
```js
function sumFibs(num) {
  // Every third Fibbonaci number is even
  //   and the rest are odd
  let f0 = 0;
  let f1 = 1;
  let f2 = 1;

  // Generate triples until num is reached
  let sum = 0;
  while (f1 <= num) {
    // Update sum
    sum += f1;
    if (f2 <= num) sum += f2;

    // Compute next three Fibonacci numbers
    [f0, f1] = [f1 + f2, f2 + (f1 + f2)];
    f2 = f0 + f1;
  }

  return sum;
}
```

### Code Explanation
**GENERAL IDEA**
It is a property of Fibonacci numbers that every third number in the sequence is even and the rest are odd.

**ALGORITHM**
- Use three work variables to hold the current 3 Fibonacci numbers.
- Generate triples as long as the first odd value is less than `num`.
- Add the two odd values, `f1` and `f2`, to the running `sum` of odd Fibonacci numbers.

