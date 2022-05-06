function clock(){

var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();

document.getElementById("hours").innerHTML = h;
document.getElementById("minutes").innerHTML = m;
document.getElementById("seconds").innerHTML = s;

}

var interval = setInterval(clock, 1000);