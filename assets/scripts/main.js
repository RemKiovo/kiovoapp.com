let count = 0;
let value = document.getElementById("value");
document
    .getElementsByTagName("button")[0]
    .addEventListener("click", function () {
        value.classList.remove("animation-trigger");
        setTimeout(function () {
            value.classList.add("animation-trigger");
        }, 0);
        count++;
        value.innerText = `You've pressed the button ${count} ${
            count === 1 ? "time" : "times"
        }! 🎉

        ${count === 69 ? "nice 😏" : ""}`;
    });
value.addEventListener("animationend", function () {
    value.classList.remove("animation-trigger");
    isAnimating = false;
});
