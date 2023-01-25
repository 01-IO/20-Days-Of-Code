function regexVar() {
   
    const re = new RegExp('^([a,e,i,o,u]).*\\1$')
    return re;

}


function main() {
    const re = regexVar();
    const s = prompt("Enter a String: ")
    
    console.log(re.test(s));
}
main();