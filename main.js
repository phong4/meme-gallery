var gallery = document.querySelector('main');
var imageUrls = [
  'https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg',
  'http://images3.memedroid.com/images/UPLOADED20/569900627b3c9.jpeg',
  'https://64.media.tumblr.com/08ddd89ccd83953598fc1f6e71ba2dca/tumblr_pkdqmakVgV1t6rhjw_1280.jpg'
];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (event) {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value)
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
