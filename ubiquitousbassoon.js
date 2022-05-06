/*
This function returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

function sumTwoSmallestNumbers(numbers) {  
    const numbersSorted = numbers.sort((a, b) => a - b)
    return numbersSorted[0] + numbersSorted[1]
}