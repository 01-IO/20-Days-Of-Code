function getGrade(score) {
    let grade;
    if(score > 25 && score <= 30) {
        grade = "A"
    }
    else if (score > 20 && score <= 25) {
        grade = "B"
    }
    else if (score > 15 && score <= 20) {
        grade = "C" 
    }
    else if(score > 10 && score <= 15) {
        grade = "D"
    }
    else if(score > 5 && score <= 10) {
        grade = "E"
    }
    else if(score >= 0 && score <= 5) {
        grade = "F"
    }
    
    return grade;
}
const score = prompt("Enter your score (Out of 30): ")
document.write(getGrade(score))
console.log(getGrade(score)) //comment out if not needed to print in console 