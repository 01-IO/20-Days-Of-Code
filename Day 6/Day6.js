function getLetter(s) {
    let letter;
    
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = "A"
            break;
        case 'bcdfg'.includes(s[0]):
            letter = "B"
            break;
        case 'hjklm'.includes(s[0]):
            letter = "C"
            break;
        case 'npqrstvwxyz'.includes(s[0]):
        letter = "D"
        break;
        
    }
    
    return letter;
}
const s = prompt("Enter a string: ");
//document.write(getLetter(s))
console.log(getLetter(s))