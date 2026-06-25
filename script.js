const pressao = 12;

const card = document.querySelector("#cardPressao");

if (pressao > 10 && pressao <= 15) {
  card.classList.add("alert");
}

if (pressao > 15) {
  card.classList.add("critical");
}
