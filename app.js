const output = document.getElementById("output");
const btn = document.getElementById("btn");
const male = document.querySelector("input[name=male]");
const female = document.querySelector("input[name=female]");

btn.addEventListener("click", (e) => {
  if (!male.value && !female.value) {
    output.innerHTML = "Enter names";
    btn.style.backgroundColor = "red";
  } else {
    btn.style.backgroundColor = "green";

    const random = Math.floor(Math.random() * (100 - 10) + 5);

    output.innerText = `${male.value} loves ${female.value} ${random}%`;
    console.log(random);
  }
});
