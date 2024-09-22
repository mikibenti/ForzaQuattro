let turn = 2;

function createTable() {
    let div;
    let id = 0;
    for (i = 0; i < 6; i++) {
        for (b = 0; b < 7; b++) { 
            id++;
            div = document.createElement("div");
            div.id = id;
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.background = "grey";
            div.style.display = "inline-block";
            div.style.margin = "10px";
            div.style.borderRadius = "100px"
            if (i == 0) {
                div.setAttribute("onclick","play(this.id)");
            }
            document.body.appendChild(div);
        }
    document.body.appendChild(document.createElement("br"));
  }
}

function play(id) {
    pos = parseInt(id) + 35;
    let color = "";
    if (turn % 2 == 0) {
        color = "red";
    } else { 
        color = "yellow";
    }
    for (i = 0; i < 6; i++) {
        if (document.getElementById(pos).style.background == "grey") {
            document.getElementById(pos).style.background = color;
            break;
        }
        pos = pos - 7;
    }
    turn++;
}

function checkWin() {

}

document.addEventListener('DOMContentLoaded', function() {
    createTable();
}, false);
