var button = document.querySelectorAll(".box");
var resBut = document.querySelector("#reset-btn");
var turn = true;
var winPatterns = [
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
        // console.log("box was clicked");
        // box.classList.add("col");
        if (turn) {
            box.innerText = "X";
            box.style.color = "red"
            turn = false;
        } else {
            box.innerText = "O"
            box.style.color = "blue"
            turn = true;
        }

        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for (var patterns of winPatterns) {
        // console.log(patterns[0], patterns[1], patterns[2]);
        // console.log(button[patterns[0]], button[patterns[1]], button[patterns[2]]);
        var ps0 = button[patterns[0]].innerText;
        var ps1 = button[patterns[1]].innerText;
        var ps2 = button[patterns[2]].innerText;
        if (ps0 != "" && ps1 != "" && ps2 != "") {
            if (ps0 === ps1 && ps1 == ps2) {
                alert(`Winner is ${ps1}`);
            }
        }
    }
}

// 38:39