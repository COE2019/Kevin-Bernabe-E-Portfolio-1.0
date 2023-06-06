const parallaxElements = document.querySelectorAll(".parallax");
const rotateElements = document.querySelectorAll(".rotate");

let xValue = 0, 
    yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallaxElements.forEach(element => {
        let speedx = element.dataset.speedx;
        let speedy = element.dataset.speedy;

        element.style.transform = 
        `translateX(calc(-50% + ${-xValue * speedx}px)) 
        translateY(calc(-50% + ${yValue * speedy}px))`;
    })
    
    rotateElements.forEach(element => {
        let speedx = element.dataset.speedx;
        let speedy = element.dataset.speedy;

        element.style.transform = `rotate(5deg)
        translateX(calc(-50% + ${-xValue * speedx}px)) 
        translateY(calc(-50% + ${yValue * speedy}px))`;
    })
})