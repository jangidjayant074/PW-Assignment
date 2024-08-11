function numberChecker(number){
  return function(num){
    return number.includes(num);
  };
}
const array = [2, 3, 4, 5, 6];
const check = numberChecker(array);
console.log(check(4)); 
console.log(check(7));
 