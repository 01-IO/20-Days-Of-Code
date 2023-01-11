function factorial(n) {
    let total=1;
    if(n==0) {
        return 1;
    }
    else {
        for(let i=n;i>=1; i--) {
        total = total * i;
        }
        return total;
    }
}

let n = prompt("Enter a number to find it's factorial: ");

document.write(factorial(n)); //prints on the webpage
console.log(factorial(n)); //prints in the console