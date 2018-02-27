var move = 0;
var moves = [];
var playing = true;

function movePlayed(square) {
    if (playing) {
        move += 1;
        color = document.getElementById(square).style.background;
        if (color != "red" && color != "blue") {
            if (move % 2 == 1) {
                document.getElementById(square).style.background = "red";
                moves.push(square);
            } else {
                document.getElementById(square).style.background = "blue";
                moves.push(square);
            }
        }

        if (moves.length == 7) {
            oldMove = moves.shift();
            document.getElementById(oldMove).style.background = "";
        }

        colors = [];
        for (i = 0; i < 9; i++) {
            num = i + 1;
            colors[i] = document.getElementById(num.toString()).style.background;
        }

        if (colors[0] == colors[1] && colors[1] == colors[2] && colors[1] != "" || colors[0] == colors[3] && colors[3] == colors[6] && colors[3] != "" ||
            colors[2] == colors[5] && colors[5] == colors[8] && colors[5] != "" || colors[6] == colors[7] && colors[7] == colors[8] && colors[7] != "" ||
            colors[3] == colors[4] && colors[4] == colors[5] && colors[4] != "" || colors[1] == colors[4] && colors[4] == colors[7] && colors[4] != "" ||
            colors[0] == colors[4] && colors[4] == colors[8] && colors[4] != "" || colors[2] == colors[4] && colors[4] == colors[6] && colors[4] != "") {
            if (move % 2 == 1) {
                document.getElementById("win").style.color = "red";
                document.getElementById("win").innerHTML = "Red Wins";
                playing = false;
            } else {
                document.getElementById("win").style.color = "blue";
                document.getElementById("win").innerHTML = "Blue Wins";
                playing = false;
            }
        }
    }
}

function newGame() {
    move = 0;
    moves = [];
    playing = true;
    for (i = 1; i < 10; i++) {
        document.getElementById(i.toString()).style.background = "";
    }
    document.getElementById("win").innerHTML = "";
}