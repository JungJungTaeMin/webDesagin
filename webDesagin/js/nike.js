const imgBox = document.querySelector('.img_box');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

function moveLastToFirst() {
    const lastImage = imgBox.lastElementChild;
    console.log(lastImage);
    imgBox.insertBefore(lastImage , imgBox.firstElementChild)
}

function moveFirstToLast() {
    const firstImage = imgBox.firstElementChild;
    imgBox.appendChild(firstImage);
}

rightBtn.addEventListener('click', moveLastToFirst);
leftBtn.addEventListener('click', moveFirstToLast);
