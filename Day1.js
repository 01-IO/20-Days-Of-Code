//Starting with the very basics of JavaScript
//Initializing a variable
var a;
a = 7;
var b;
a = b;

//Using multi-dimensional arrays
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
const myData = myArray[2][1];

//Creating a simple function 
function argsSum(p1,p2) {
    return p1+p2;
}
argsSum("Hello",411);