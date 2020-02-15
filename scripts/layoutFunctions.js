function startPressed() {
    var startbutton = document.getElementById("startbutton");
    if (startbutton.className == "startbutton-off") { //open menu
        startbutton.className = "startbutton-on";
    } else { //close menu
        startbutton.className = "startbutton-off";
    }
}