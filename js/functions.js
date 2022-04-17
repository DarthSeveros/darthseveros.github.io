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
    document.getElementById("days").innerHTML = (20 - day) + "<h3>Días</h3>";
    document.getElementById("hours").innerHTML = (14 - hour) + "<h3>Horas</h3>";
    document.getElementById("minutes").innerHTML = (60 - min) + "<h3>Minutos</h3>";
    document.getElementById("seconds").innerHTML = (60 - sec) + "<h3>Segundos</h3>";
    setTimeout(function () { setTime()}, 500);
}

setTime();
