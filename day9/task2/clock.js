function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

function alerttt(){
   var sound = new Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");
    sound.play();
    console.log("ok")
   
document.getElementById("hour").value=""

document.getElementById("mm").value=""

document.getElementById("seconds").value=""

}


showTime();

var idd;

function getmilisec(){


var ah= Number( document.getElementById("hour").value)
console.log(ah)
var amm= Number (document.getElementById("mm").value)
console.log(amm)
var as=Number(document.getElementById("seconds").value)
console.log(as)
var milih= ah *60*60*1000;
var milim= amm *60*1000;
console.log(milim)
var milis= as *1000;
console.log(as)
var milli=milih+milim+milis;
console.log(milli)

idd=setTimeout(alerttt,milli);


}



var set= document.getElementById("set")

    set.addEventListener("click",getmilisec)

    var reset=document.getElementById("reset")

    function clearmytime(){

    clearTimeout(idd)
document.getElementById("hour").value=""

document.getElementById("mm").value=""

document.getElementById("seconds").value=""
    }




reset.onclick=clearmytime;