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
    //ciclo con 100 iterazioni
    for (let i = 0; i < 100; i++) {
      const newElem = myCreateElement("div", ["cell"], i + 1);
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
