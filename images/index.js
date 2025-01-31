window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    let documentHeight = document.documentElement.scrollHeight * 0.785;
    document.querySelector(".scroll-progress-progress-indicator-bar").style.width = scrollY/documentHeight * 100+ "%";
    console.log(document.querySelector(".scroll-progress-progress-indicator-bar").style.width + " bu");
});