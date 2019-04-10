const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNubmer) {
    const image = new Image();
    image.src = `C:/vscode-dev/hakg/hakg/study01/images/${imgNubmer}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();