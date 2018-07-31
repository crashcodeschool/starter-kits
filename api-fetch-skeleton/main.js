// // You can use my demo key if you don't want to set up a Giphy account
const BASE_URL = 'http://api.giphy.com';
const KEY = '?api_key=YfYIxfl7ihK8195hqjm8Pw7MVREl5hIZ';
const RANDOM_PATH = '/v1/gifs/random';
const ENDPOINT = BASE_URL + RANDOM_PATH + KEY;
//---------
const fetchButton = document.querySelector('#fetchButton')
const gifSection = document.querySelector('.gif-section');
const image = document.createElement('img')
const gifImg = gifSection.appendChild(image)
//------------------------------------
//              FETCH
//------------------------------------
const getData = () => {
fetch(ENDPOINT)
  .then(function(data) {
    data.json()
      .then (function(response) {
        let url = response.data.image_original_url
        image.setAttribute('src', url)
      })
  })
}
//------------------------------------
//              LOADTWELVE
//------------------------------------

fetchButton.addEventListener('click', getData)
getData()

