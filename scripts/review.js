const params = new URLSearchParams(window.location.search);
const confirmation = document.getElementById("confirmation");

confirmation.innerHTML = `
  <p><strong>Product ID:</strong> ${params.get("product")}</p>
  <p><strong>Rating:</strong> ${params.get("rating")} stars</p>
  <p><strong>Installation Date:</strong> ${params.get("installDate")}</p>
  <p><strong>Useful Features:</strong> ${params.getAll("features").join(", ") || "None selected"}</p>
  <p><strong>Review:</strong> ${params.get("review") || "No written review."}</p>
  <p><strong>User Name:</strong> ${params.get("username") || "Anonymous"}</p>
`;

let count = localStorage.getItem("reviewCount");
count = count ? parseInt(count) + 1 : 1;
localStorage.setItem("reviewCount", count);
document.getElementById("submissionCount").textContent = count;

const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const lastModDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModDate}`;


