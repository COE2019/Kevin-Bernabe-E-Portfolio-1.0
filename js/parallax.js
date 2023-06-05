let myName = document.getElementById('name');
let titleDev = document.getElementById('title1');
let titleDes = document.getElementById('title2');
let dpBox = document.getElementById('profile-picture-border');
let dpCont = document.getElementById('profile-picture-container');
let dp = document.getElementById('profile-picture');

window.addEventListener('scroll', functionn() {
    let value = window.scrollY;
    myName.style.left = value * .25 + 'px';
})