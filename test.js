Array.prototype.sum = function() {
    let res = 0;
    for(let i =0; i< this.length; i++) {
        res += this[i];
    }
    return res;
}

let arr = [1,2,3,4,5];

console.log(arr.sum());