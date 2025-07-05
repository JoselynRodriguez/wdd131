const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const lastModDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModDate}`;
