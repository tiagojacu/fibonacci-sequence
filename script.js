var ultimateTwoNumbers = [0, 1];
var fibonacciQuantity = 1475; // quantity fibonacci numbers

document.write(ultimateTwoNumbers[0] + ", "); // zero
document.write(ultimateTwoNumbers[1] + ", "); // one

for(var i = 0; i < fibonacciQuantity; i++){ // while i < fibonacciQuantity
    var result = ultimateTwoNumbers[0] + ultimateTwoNumbers[1]; // add ultimate two numbers of 'ultimateTwoNumbers' array
    document.write(result + ", "); // to write fibonacci numbers
    ultimateTwoNumbers.splice(0,1); // delete penultimate number
    ultimateTwoNumbers.push(result); // add 'result' value to array
}
