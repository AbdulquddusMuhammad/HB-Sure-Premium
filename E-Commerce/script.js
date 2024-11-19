const bars = document.getElementById("bar");
const navBars = document.getElementById("navbar");
const closeNavBar = document.getElementById("close")

if (bars) {
    bars.addEventListener("click", () => {
        navBars.classList.add("active");
    })
}

if (close) {
    closeNavBar.addEventListener("click", () => {
        navBars.classList.remove("active");
    })
}