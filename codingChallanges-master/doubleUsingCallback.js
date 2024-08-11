function doubleArray(arr, fn){
    const double = arr.map((n) => {
        return fn(n);
    });
    return double;
}
function fn(num) {
    return num * 2;
}
const arr = [1,2,3,4,5,6]
const newArray = doubleArray(arr, fn);
console.log(newArray);
// newArray();

