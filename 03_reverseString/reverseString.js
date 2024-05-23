const reverseString = function(input) {
    let inputToArray = input.split('');
    let reversedArray = inputToArray.reverse();
    let arrayToString = reversedArray.join('')
    return arrayToString;
};

// Do not edit below this line
module.exports = reverseString;
