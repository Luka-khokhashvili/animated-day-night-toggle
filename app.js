// constants for elements
const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");
const buttonBody = document.querySelector(".button-body");
const buttonNight = document.querySelector(".left-half");
const buttonDay = document.querySelector(".right-half");
const iconPath1 = document.getElementsByTagName("path")[0];
const iconPath2 = document.getElementsByTagName("path")[1];
const sun = document.querySelector(".sun-bg");
const moon = document.querySelector(".moon-bg");
const slider = document.querySelector(".slider");
const title = document.querySelector(".title");

let isNight = false;

// Function to update cursor position
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
});

// Hide cursor on mouseout
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

// Show cursor on mouseover
document.addEventListener("mouseover", () => {
  cursor.style.display = "block";
});

// Function to toggle night mode
function toggleNight() {
  if (isNight) {
    body.style.background = "rgba(0, 1, 21)";
    buttonBody.style.borderColor = "rgba(199, 195, 183, 0.4)";
    iconPath1.style.fill = "rgb(0, 0, 0)";
    iconPath2.style.fill = "rgb(0, 0, 0)";

    title.style.color = "#ffffff";

    sun.style.opacity = "0";
    moon.style.opacity = "0.3";

    sun.classList.toggle("move-right");
    moon.classList.toggle("move-left");

    slider.style.marginLeft = "0";
    slider.style.backgroundColor = "rgba(199, 195, 183, 0.4)";

    isNight = false;
  }
}

// Function to toggle day mode
function toggleDay() {
  if (!isNight) {
    body.style.background = "rgb(195, 205, 205)";
    buttonBody.style.borderColor = "rgb(0, 1, 21, 0.6)";
    iconPath1.style.fill = "rgb(224, 224, 224)";
    iconPath2.style.fill = "rgb(224, 224, 224)";

    title.style.color = "rgb(38, 38, 38)";

    moon.style.opacity = "0";
    sun.style.opacity = "1";

    moon.classList.toggle("move-left");
    sun.classList.toggle("move-right");

    slider.style.marginLeft = "calc(100% - 32.7%)";
    slider.style.backgroundColor = "rgb(0, 1, 21, 0.6)";

    isNight = true;
  }
}

// Event listeners for day/night buttons
buttonNight.addEventListener("click", toggleNight);
buttonDay.addEventListener("click", toggleDay);
