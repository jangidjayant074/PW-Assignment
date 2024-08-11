

function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
}

let a = 10;
let b = 30;
console.log(a,b); 
[a, b] = swapValues(a, b);
console.log(a, b); 



