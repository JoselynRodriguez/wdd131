const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const lastModDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModDate}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});