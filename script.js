"use strict";

//classes
const guess_box = document.querySelector(".guess-box");
const number = document.querySelector(".number");
const massage = document.querySelector(".massage");
const btn_again = document.querySelector(".btn-again");
const btn_check = document.querySelector(".btn-check");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

//create random number
let random = Math.trunc(Math.random() * 10 * 2 + 1);

let Fscore = Number(score.textContent);
let Fhighscore = Number(highscore.textContent);

//when button click
btn_check.addEventListener("click", function () {
  const inputNumber = Number(number.value);
  console.log(random);

  if (inputNumber > random) {
    massage.textContent = "The number is high 📈";
    score.textContent = --Fscore;
  }
  if (inputNumber < random) {
    massage.textContent = "The number is low 📉";
    score.textContent = --Fscore;
  }
  if (inputNumber === random) {
    massage.textContent = "You won 🏆";
    document.querySelector("body").style.backgroundColor = "#56BE25";
    number.style.backgroundColor = "#56BE25";
    if (Fhighscore < Fscore) {
      Fhighscore = Fscore;
      highscore.textContent = Fhighscore;
    }
    document.querySelector(".guess-box").textContent = random;
  }
});

const clean = function () {
  Fscore = score.textContent = 20;
  massage.textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "rgb(31, 30, 30)";
  number.style.backgroundColor = " rgb(31, 30, 30)";
  number.value = "";
};

btn_again.addEventListener("click", function () {
  random = Math.trunc(Math.random() * 10 * 2 + 1);
  document.querySelector(".guess-box").textContent = "?";
  console.log(random);
  clean();
});
