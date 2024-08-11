class Calculator{
    static addToNumbers(num1, num2){
        return num1 + num2;
    }
}
const summation = Calculator.addToNumbers(10, 20);
console.log(`The sum  is : ${summation}`);