function reverseString(s) {
    const message = "Error"
    
    try {
       s = s.split("").reverse().join("");
    }
    catch (err) {
        console.log(err.message)
    }
    finally {
        console.log(s)
        }
}
let s = prompt("Enter a string to reverse: ");
console.log(reverseString(s))