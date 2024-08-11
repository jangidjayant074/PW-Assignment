function randomElements(arr){
    const [first, second, , , , last] = arr;
    return [ first, second, last];
}

const Array = [2,3,4,5,6,7];
console.log(randomElements(Array));