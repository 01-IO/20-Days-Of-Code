function getDayName(dateString) {
    
    const weekDays = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday', 'Friday','Saturday']
    
    const dayName = new Date(dateString).getDay();
       
    
    return weekDays[dayName];
}
function main() {
    const d = prompt("Enter the number of dates you want to put: ");
    
    for (let i = 0; i < d; i++) {
        const date = prompt("Enter Date: ");
        
        console.log(getDayName(date));
    }
}
main();