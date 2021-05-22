// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/


function getLength(qoraal,lengthof) {
   return lengthof(qoraal)
}

function lengthof(oraal) {
  return items.length
} 
console.log(getLength( "the length of arr is " ,lengthof))

function last(arr,lastItem) {
  return lastItem(arr)
}
function lastItem(arr) {
 return items[3] 
}
console.log(last("last item  is", lastItem));

function sumNums(x, y, sum) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return sum(x,y)
}
function sum(x,y){
  return x + y 
}
console.log(sumNums(8,9,sum));

function multiplyNums(x, y, mul) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return mul(x,y)
}
function mul(x,y){
  return x * y 
}
console.log(mul(10,9,sum));

function contains(item, list, check) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
   return check(list,item)
}
function check(list,item){

  if (items === items ) {
    console.log(true);
    
  } else {
    console.log(false);
  }
}

console.log(contains(xoolo,dad ,check));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}