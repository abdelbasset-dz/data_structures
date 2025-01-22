// function that takes an array of numbers and returns a new array containing only the even numbers.
// Here an Example

let numbers = [6, 10, 15, 11, 22, 31, 40];

let even = [];
for(let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 == 0)
       even.push(numbers[i]);
}

console.log(`Even numbers in even array are : ${even}`);