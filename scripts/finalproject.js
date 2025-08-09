
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const hamButton = document.getElementById("hambutton");
const navMenu = document.querySelector("nav.windows");

hamButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamButton.classList.toggle("open");
});
