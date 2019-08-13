let xhr = new XMLHttpRequest();



function handleData() {

    // console.log(xhr);

    if(xhr.readyState < 4) {
        return; 
    }

    if(xhr.status != 200) {
        return;
    }

    console.log(JSON.parse(xhr.responseText));

    let data = JSON.parse(xhr.responseText);

    // let p = document.createElement('p');
    // p.innerText = data.title;

    // document.body.appendChild(p);

}


xhr.onreadystatechange = handleData;


xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums',true);


xhr.send('');
