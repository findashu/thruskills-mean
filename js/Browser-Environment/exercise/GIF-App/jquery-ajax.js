let sbtBtn = document.querySelector('input[type=submit]');
let inpt = document.querySelector('input[type=text]');
let displayImg = document.querySelector('.display-imgs');


function getData() {
    let value = inpt.value;
    displayImg.innerHTML = '';
    $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=VV8DtITCPM0dCnPGEEPux8nruQan9cWZ&q=${value}&limit=25&offset=&rating=G&lang=en`,

        success: function (respData) {
            console.log('successs', respData);
            let dataArray = respData.data;

            dataArray.forEach(ele => {
                console.log(ele.images.downsized.url)
                let img = document.createElement('img');
                img.src = ele.images.downsized.url;
                displayImg.appendChild(img);
            })



            // let images = respData.data.images
            // console.log(respData)
            // console.log(images);

            // Object.keys(images).forEach(ele => {
            //     console.log(images[ele].url);

            //     let img = document.createElement('img');
            //     img.src = images[ele].url;
            //     displayImg.appendChild(img);
            // })
        },
        error: function (err) {
            console.log('error', err)
        }
    })




}

sbtBtn.addEventListener('click', getData);