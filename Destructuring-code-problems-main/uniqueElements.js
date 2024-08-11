function removeDuplicates(Arr){

    const unique = new Set(Arr)
    
    const uniqueArray = Array.from(unique);
    return uniqueArray;
}

const inputArray = [1,2,3,2,1,3,4,5,4,];
const result = removeDuplicates(inputArray);

console.log(result);