# fcc-intermediate-algorithm-scripting-lesson-12

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-fbp6z4)

## PROBLEM EXPLANATION
You will need to gather all the **Fibonacci** numbers and then check for the odd ones.  Once you get the odd ones then you will add them all.  The last number should be the number given as a parameter if it actually happens to be an off Fibonacci number.

## REFERENCE LINKS
- [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number)

## HINTS
### Hint 1
To get the next number of the series, you need to add the current one to the previous and that will give you the next one.

### Hint 2
To check if a number is even all you have to check is if `number % 2 == 0`.

### Hint 3
As you get the next odd one, don't forget to add it to a global variable that can be returned at the end.  `result += currNumber;` will do the trick.

