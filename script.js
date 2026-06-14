const text = "Python Enthusiast | Web Developer";

let index = 0;

function typeEffect() {

    document.getElementById("typing")
    .innerHTML = text.slice(0, index);

    index++;

    if (index <= text.length) {
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

function darkMode() {
    document.body.classList.toggle("dark");
}

window.onscroll = function () {

    let scrollTop =
        document.documentElement.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrolled =
        (scrollTop / height) * 100;

    document.getElementById("progress-bar")
        .style.width = scrolled + "%";
};

document.querySelector("form").addEventListener("submit", function () {
    alert("Message sent successfully!");
});