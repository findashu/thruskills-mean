let sbtBtn = document.querySelector('input[type=submit]');
let inpt = document.querySelector('input[type=text]');
let displayImg = document.querySelector('.display-imgs');


function getData() {
    let value = inpt.value;
    displayImg.innerHTML = '';
    
    let url =`https://api.giphy.com/v1/gifs/search?api_key=VV8DtITCPM0dCnPGEEPux8nruQan9cWZ&q=${value}&limit=25&offset=&rating=G&lang=en`
    

    fetch(url)
        .then(resp => resp.json())
        .then(bodyData => {
            console.log(bodyData)
            let dataArray = bodyData.data;
            dataArray.forEach(ele => {
                let img = document.createElement('img');
                img.src = ele.images.downsized.url;
                displayImg.appendChild(img);
            })
        })
        .catch(err => console.log(err));
}

sbtBtn.addEventListener('click', getData);