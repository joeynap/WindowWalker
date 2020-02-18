function startPressed() {
    var startbutton = document.getElementById("startbutton");
    if (startbutton.className == "startbutton-off") { //open menu
        startbutton.className = "startbutton-on";
        document.getElementById("startmenu").style.display = "block";
    } else { //close menu
        startbutton.className = "startbutton-off";
        document.getElementById("startmenu").style.display = "none";
    }
}

function leadingZero(dt) { 
  return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

function getTime() {
    var dateTime = new Date();
    var time = dateTime.getHours().toString() + ":" + leadingZero(dateTime);
    document.getElementById("timedate").textContent = time;
    console.log("time updated.")
    setTimeout(getTime, 30000); //rerun every 30 secs
}

function init() {
}