const output = document.getElementById("output");
const btn = document.getElementById("btn");
const male = document.querySelector("input[name=male]");
const female = document.querySelector("input[name=female]");

btn.addEventListener("click", (e) => {
  if (!male.value && !female.value) {
    output.innerHTML = "Enter names";
    btn.style.backgroundColor = "crimson";
    btn.style.color = "whitesmoke";
  } else {
    btn.style.backgroundColor = "springgreen";
    btn.style.color = "whitesmoke";

    const random = Math.floor(Math.random() * (100 - 10) + 5);
    const maleLove = male.value.toUpperCase().trim();
    const femaleLove = female.value.toUpperCase().trim();
    output.innerHTML = ` <p>${maleLove} <span>loves</span> ${femaleLove}  <span>${random}%</span></p> `;
    if (random <= 20) {
      output.innerHTML += `<p>Love Is Gone</p>`;
    } else if (random <= 30) {
      output.innerHTML += `<p>Love Is Almost Gone</p>`;
    } else if (random > 30 && random <= 50) {
      output.innerHTML += `<p>Love Is Somewhat Gone</p>`;
    } else if (random > 50 && random <= 70) {
      output.innerHTML += `<p>Love Is Alive</p>`;
    } else if (random > 70 && random <= 90) {
      output.innerHTML += `<p>Love Is Strong As Rock</p>`;
    } else {
      output.innerHTML += `<p>Forever Together</p>`;
    }
  }
  male.value = "";
  female.value = "";
});
male.focus();
