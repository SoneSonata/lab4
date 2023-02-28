let mybutton = document.querySelector('.createbutton');
mybutton.addEventListener('click', renderImg);
const baseURL = 'images/';
const pics = ['pic1.png', 'pic2.png', 'pic3.png', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg', 'pic7.jpg', 'pic8.jpg', 'pic9.jpg'];
let index = 0;

function getNumImg(){
    var numImgs = Number(prompt("How many pictures?"));

    if(numImgs <= 0|| Number.isNaN(numImgs)) {
        return 0;
    }

    return numImgs;
}

function makeImg() {
    const imgNum = getNumImg();
    const tempHolder = document.createDocumentFragment();

    for (let i = 0; i <= imgNum; i++) {
        let pic = document.createElement(img);
        pic.src = baseURL + pics[index];
        let txt = document.createTextNode(i);
        pic.className = "picture";
        document.body.appendChild(pic);
        index++

        if(index > pics.length){
            index = 0;
        }

        pic.appendChild(txt);
        tempHolder.appendChild(pic);

    }
    return tempHolder;
}

function renderImg(e) {
    const containerName = e.target.dataset.holder;
    const container = document.querySelector(containerName);
    const genpic = makeImg();

    if (genpic.children.length === 0) {
        container.innerHTML = "Try Again. Please type a positive whole number";
        } else {
        container.innerHTML = "";
        container.appendChild(genpic);
        }
}
