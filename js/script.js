/* 
  Ex1 :  Write a function that takes an array of integers as input, iterates over the array, and returns a new array.
  The returned array should contain the result of raising 2 to the power of the original input element.
  For example,([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
  Use for and forEach and then map to solve this question to see the difference between the three ways
  */

const powerOfTwoUsingFor = arr => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 ** arr[i]);
  }

  return newArr;
};

const powerOfTwoUsingForEach = arr => {
  const newArr = [];
  arr.forEach(element => newArr.push(2 ** element));

  return newArr;
};

const powerOfTwoUsingMap = arr => {
  return arr.map(element => 2 ** element);
};

console.log(powerOfTwoUsingMap([1, 2, 3]));

/* 
  Ex2:  Write a function that takes an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.
  If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
  For example:([1,2,3,"Rawan"]) returns ['odd','even','odd','N/A'].
  */

const isOddOrEven = arr => {
  return arr.map(element => {
    if (typeof element !== "number") return "N/A";
    else if (element % 2 === 0) return "even";
    else return "odd";
  });
};

console.log(isOddOrEven([2, 4, 5, 6, 7, "hello", 8]));

/*
Ex3: Use forEach to  Return all the names in the array  [“Rawan", "Wesam", "Hind", "Muhammad", "Esraa", “Dareen”] using loops.
*/

const returnAllNames = arr => arr.forEach(element => console.log(element));

returnAllNames(["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"]);

/*
EX4: Write a function named fizzbuzz that takes in an array of numbers.
Iterate over the array using forEach or map to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.
Return the resulting output array.
*/

const fizzBuzz = arr => {
  return arr.map(element => {
    if (element % 3 === 0 && element % 5 === 0) return "Fizz Buzz";
    else if (element % 3 === 0) return "Fizz";
    else if (element % 5 === 0) return "Buzz";
    else return element;
  });
};

console.log(fizzBuzz([3, 6, 5, 10, 15]));
