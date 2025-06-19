//  Adding an element in a JS array
// 1. At the end
// using .push() method

let arr = [1,2,3];
arr.push(4);
console.log(arr);

// 2. In the middle
// using .splice(index, deleteCount, item1, item2,...) method

let arr1 = [1,2,3,4];
arr1.splice(1, 0, 2);
console.log(arr1);
// if you want to add more than one element in between
arr1.splice(2,0,3,3,3,3);
console.log(arr1);

// 3. At the beginning
// using .unshift() method

let arr2 = [1,2,3,4];
arr2.unshift(0);
//if you want to add more than 1 element
arr2.unshift(0,0,0);
console.log(arr2);