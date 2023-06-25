const imgs = ['0.jpg', '1.jpg', '2.jpg'];

const chosenImage = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;

bgImage.id = 'bg';

document.body.appendChild(bgImage);
