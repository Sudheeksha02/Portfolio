const text = "Python Enthusiast | Web Developer";

let index = 0;

function typeEffect() {

    document.getElementById("typing").innerHTML =
        text.slice(0, index);

    index++;

    if(index <= text.length) {
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

function darkMode() {
    document.body.classList.toggle("dark");
}

.dark {
    background: #121212;
    color: white;
}

.dark section {
    background: #1e1e1e;
}

.dark h2 {
    color: white;
}

function showMessage() {

    alert(
        "Hi! I am Sudheeksha's AI Assistant 👋"
    );
}