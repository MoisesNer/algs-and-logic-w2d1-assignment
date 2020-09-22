// Given an array of 10 numbers, return the maximum possible total 
// made by summing just 5 of the 10 numbers.

const maxTotal = function(arr) {
	arr.sort((a,b) => b - a)
	var total = 0;
	for (let i = 0; i < 5; i++) {
		total += arr[i];
    }
	console.log(total);
}

maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) 
//➞ 43

maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) 
//➞ 100

maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) 
//➞ 40