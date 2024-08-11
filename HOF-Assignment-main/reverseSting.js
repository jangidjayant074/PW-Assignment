// Program to Reverse A String

const input = "Hello world";
console.log("string will be reversed aftre 2 second.");
function reverseString(input){
    setTimeout(function () {
        const revString = input.split('').reverse().join('');
        console.log(revString);
    }, 2000);
}

reverseString(input);