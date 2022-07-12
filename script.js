const bakso = document.querySelector(".babi");
const thamb = document.querySelectorAll(".card-img-top");
const coeg = document.querySelector(".coeg");

bakso.addEventListener("click", function (e) {
  thamb.forEach(function (el) {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    }
    el.setAttribute("class", "card-img-top");
  });

  if (e.target.className === "card-img-top") {
    e.target.classList.add("active");
    console.log(e.target);
    e.preventDefault();
  }
});

const emu = document.createElement("img");
emu.setAttribute(
  "src",
  "https://yt3.ggpht.com/rr3wpWwr8V37oXEsGcxQCddAqgr7OeMGFOVP3Rx8lSz1rGbi0pPg6pM2vWwsBBy-92k1TV74=s48-c-k-c0x00ffffff-no-rj"
);
emu.style.height = "24px";
coeg.before(emu);

const hurufGede = document.querySelector(".huruf");
const bungkus = [...hurufGede.textContent]
  .map((e) => `<span>${e}</span>`)
  .join("");
hurufGede.innerHTML = bungkus;
console.log(bungkus);

const smerah = document.querySelector("input[name = merah]");
const tangkap = document.querySelector(".jumbotron");

smerah.addEventListener("input", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  console.log(r + " " + g + " " + b);
  const tangkap = document.querySelector(".jumbotron");

  tangkap.style.backgroundColor = "rgb(" + r + " " + g + " " + b + ")";
  tangkap.style.color = "rgb(" + 100 + " " + g + " " + 100 + ")";
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

function wahWahWorld() {} //blom dibuat
