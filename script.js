const button = document.querySelectorAll(".box");
const resBut = document.querySelector("#reset-btn");
const newBtn = document.querySelector("#play-again");
const msgCont = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const audio = document.querySelector("#myAudio");
let turn = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

button.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "X";
            box.style.color = "red";
            turn = false;
        } else {
            box.innerText = "O";
            box.style.color = "blue";
            turn = true;
        }

        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    button.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    button.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const checkWinner = () => {
    for (const patterns of winPatterns) {
        const ps0 = button[patterns[0]].innerText;
        const ps1 = button[patterns[1]].innerText;
        const ps2 = button[patterns[2]].innerText;
        if (ps0 !== "" && ps1 !== "" && ps2 !== "") {
            if (ps0 === ps1 && ps1 === ps2) {
                audio.play();
                showWinner(ps1);
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
};

const resetGame = () => {
    enableBoxes();
    msgCont.classList.add("hide");
    audio.pause();
};

newBtn.addEventListener("click", resetGame);
resBut.addEventListener("click", resetGame);