let mybutton = document.querySelector('.createbutton');
mybutton.addEventListener('click', renderImg);
const pics = []
let index = 0;

function getNumImg(){
    var numImgs = Number(prompt("How many pictures?"));

    if(numImgs <= 0|| Number.isNaN(numImgs)) {
        return 0;
    }

    return numImgs;
}

function renderImg() {
    const imgNum = getNumImg();
    const tempHolder = document.createDocumentFragment();

    for (let i = 0; i <= imgNum; i++) {

    }
}