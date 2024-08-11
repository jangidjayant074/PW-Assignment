function manipulateString(inputname){
    const string = inputname.toUpperCase();

    function logString(){
        console.log(`The manipulatedString is : ${string}`);
    }

    return logString;   

}
const name = "shivank tyagi"
console.log(`The input string is : ${name}`);
const logFunction =  manipulateString(name)
logFunction();
