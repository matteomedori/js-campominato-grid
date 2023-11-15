"use strict";

/*
FUNCTIONS
*/

//crea elemento con tag, classi e contenuto
function myCreateElement(tag, classesToAdd, content) {
  const element = document.createElement(tag);
  for (let i = 0; i < classesToAdd.length; i++) {
    element.classList.add(classesToAdd[i]);
  }
  element.append(content);
  return element;
}

/*
OPERATIONS
*/

const board = document.querySelector(".board");
const playButton = document.getElementById("play");
//non ho ancora cliccato su play
let isPlaying = false;

playButton.addEventListener("click", function () {
  if (!isPlaying) {
    const selectValue = document.querySelector("select").value;
    let numeroIterazioni;
    let classes = [];
    //bassa difficoltà
    if (selectValue === "low") {
      numeroIterazioni = 100;
      classes = ["cell", "low-difficult"];
    }
    //media difficoltà
    else if (selectValue === "medium") {
      numeroIterazioni = 81;
      classes = ["cell", "medium-difficult"];
    }
    //alta difficoltà
    else if (selectValue === "high") {
      numeroIterazioni = 49;
      classes = ["cell", "high-difficult"];
    }

    //ciclo che itera tante volte quanto il numero di celle necesarrie
    for (let i = 0; i < numeroIterazioni; i++) {
      const newElem = myCreateElement("div", classes, i + 1);
      board.append(newElem);
    }

    //ho cliccato su play
    isPlaying = true;

    //lista di tutte le celle
    const cells = document.querySelectorAll(".cell");
    for (let j = 0; j < cells.length; j++) {
      cells[j].addEventListener("click", function () {
        cells[j].classList.toggle("new-bg");
        console.log(`Hai cliccato sulla cella ${cells[j].innerHTML}`);
      });
    }
  }
});
