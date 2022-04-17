function setTime(){
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    if (month == 3) {
        day -= 30;
    }
    document.getElementById("date").innerHTML = "<p id='day'>" + (20 - day) + ":" + (14 - hour) + ":" + (60 - min) + ":" + (60 - sec);
    //setTimeout(function () { setTime()}, 500);
}

setTime();