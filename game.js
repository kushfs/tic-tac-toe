let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgcont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
  [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");

    if (turnO) {
      box.innerText = "O";
    } else {
      box.innerText = "X";
    }
    turnO = !turnO; 
    box.disabled = true;

    checkWinner();
  });
});

const disablebuttons = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enablebuttons = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
}

const resetgame = () => {
    turnO = true;
    enablebuttons();
    msgcont.classList.add("hide");

}
const showWinner = (winner)  =>
{
    msg.innerText = `yaaayyy!! "${winner}" Won `;
    msgcont.classList.remove("hide");
    disablebuttons();
}
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 !== "" && posVal1 === posVal2 && posVal1 === posVal3) {
      console.log("Winner!");
      showWinner(posVal1);
      break;
    }
  }
};


reset.addEventListener("click", resetgame);


