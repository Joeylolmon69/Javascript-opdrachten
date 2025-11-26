function stop() {
    const img = document.getElementById("image");
    img.style.opacity = 0;
    setTimeout(function() {
        img.src = "Still.png";
        img.style.opacity = 1;
    }, 100);
}

function transition() {
    const img = document.getElementById("image");
    const button = document.querySelector(".button");
    button.style.display = "none";
    img.style.opacity = 0;
    setTimeout(function() {
        img.src = "Super cool.gif";
        img.style.opacity = 1;
    }, 100);
}
