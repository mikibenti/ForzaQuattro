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
            div.setAttribute("onclick","checkPos(this.id)");
            document.body.appendChild(div);
        }
    document.body.appendChild(document.createElement("br"));
  }
}

function checkPos(id) {
    pos = id;
}

document.addEventListener('DOMContentLoaded', function() {
    createTable();
}, false);
