const smerah = document.querySelector("input[name = merah]");
const tangkap = document.querySelector(".jumbotron");

smerah.addEventListener("input", function () {
  const r = smerah.value;
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r + " " + g + " " + b);
  const tangkap = document.querySelector(".jumbotron");
  tangkap.style.backgroundColor = "rgb(" + r + " " + g + " " + b + ")";
});

const tmblBaru = document.createElement("button");
const textBaru = document.createTextNode("reset");
tmblBaru.appendChild(textBaru);
tmblBaru.setAttribute("class", "cobaLagi");
const li3 = document.querySelector(".li3");
li3.before(tmblBaru);

tmblBaru.addEventListener("click", function () {
  tangkap.removeAttribute("style");
});
