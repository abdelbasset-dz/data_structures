const queue = [];

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

let item = queue.shift(); // removes the first item from the array

console.log(queue); // Logs the entire queue 
console.log(queue[1]); // Logs the element at index 1
console.log(queue[2]); // Logs the element at index 2
console.log(queue[3]); // Logs the element at index 3
