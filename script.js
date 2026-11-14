let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;
// Winning combinations
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
// Box click event
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        // Draw condition
        if (count === 9 && !isWinner) {
            msg.innerText = "Game was a Draw!";
            disableBoxes();
        }
    });
});
// Disable all boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
// Enable all boxes
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
// Check winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (
            pos1Val !== "" &&
            pos2Val !== "" &&
            pos3Val !== ""
        ) {
            if (
                pos1Val === pos2Val &&
                pos2Val === pos3Val
            ) {
                msg.innerText = `Winner: ${pos1Val}`;
                disableBoxes();
                return true;
            }
        }
    }
    return false;
};
// Reset game
const resetGame = () => {
    turnO = true;
    count = 0;
    msg.innerText = "";
    enableBoxes();
};
// Reset button event
resetBtn.addEventListener("click", resetGame);