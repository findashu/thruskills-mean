let sbtBtn = document.querySelector('input[type=submit]');
let inpt = document.querySelector('input[type=text]');
let displayImg = document.querySelector('.display-imgs');


function getData() {
    let value = inpt.value;

    let xhr = new XMLHttpRequest();


    function handleResponse() {
        displayImg.innerHTML = ''
        if(xhr.readyState < 4) {
            return;
        }

        if(xhr.status != 200) {
            return
        }

        let respData = JSON.parse(xhr.responseText);

        let images = respData.data.images
        console.log(respData)
        console.log(images);

        Object.keys(images).forEach(ele => {
            console.log(images[ele].url);

            let img = document.createElement('img');
            img.src = images[ele].url;
            displayImg.appendChild(img);
        })
    }

    xhr.onreadystatechange = handleResponse;

    xhr.open('GET',`
    https://api.giphy.com/v1/gifs/translate?api_key=VV8DtITCPM0dCnPGEEPux8nruQan9cWZ&s=${value}`,true);

    xhr.send();

}

sbtBtn.addEventListener('click', getData);