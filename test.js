
function fn1() {
    return 1
}

function fn2() {
    return 2
}



function finalResult(a, b) {
    return a() + b();
}

var res = finalResult(fn1, fn2);

var res2 = finalResult(function (){return 5}, function () { return 5});


console.log(res2)