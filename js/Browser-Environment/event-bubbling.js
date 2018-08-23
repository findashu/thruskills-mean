
function paraHandler() { 
    alert('clicked paragraph');
}

var para = document.getElementById('closer'); 

para.addEventListener('click', paraHandler, false);

document.body.addEventListener('click', function () { 
    alert('clicked body');
}, false);

document.addEventListener('click', function () {
    alert('clicked doc');
}, false);

window.addEventListener('click', function () {
alert('clicked window'); }, false);


// function paraHandler(e) { 
//    alert('clicked paragraph'); e.stopPropagation();
// }