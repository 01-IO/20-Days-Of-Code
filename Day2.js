//Program for Seperating Vowels and Consonants from a String given by the user 
function vowelsAndConsonants(s) {
    //const vowArr = ['a','e','i','o','u'];
    let vowels = "";
    let consonants = "";
    for(let i = 0;i<s.length;i++) {
        
        if(s[i].match(/[aeiouAEIOU]/)) {
            vowels += s[i]
        }
        else { consonants += s[i]}
            
    }
    for (let i = 0;i<vowels.length;i++) {
        console.log(vowels[i])
    }
    for (let i = 0;i<consonants.length;i++) {
        console.log(consonants[i])
    }
}

const s = prompt("Please enter any string: ");
vowelsAndConsonants(s);
//

//Converting from one data type to another
const firstInteger = 4;
const secondInteger = 8;
console.log(firstInteger + parseInt(secondInteger))
//