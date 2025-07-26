const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const lastModDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModDate}`;

const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click', () => {
	document.querySelector(`h1`).classList.toggle(`show`);
	document.querySelector(`#navmenu`).classList.toggle(`show`);
	hambutton.classList.toggle('show');
});

function toggleActive(element) {
	element.classList.toggle("active");
}