var photos = document.querySelectorAll(".mySlides");
console.log(photos);

var max = photos.length;
console.log(max)

var btnf = document.getElementById("btnf");
var btnb = document.getElementById("btnb");
var n = 0;




var newp = document.getElementById("input");
var temp = document.getElementById("temp")
var ntemp = temp.cloneNode(true);
console.log(ntemp)
ntemp.setAttribute("id", "")
console.log(ntemp)
console.log(max)



function countup() {
    console.log(`n=${n}`)
    if (n < max - 1) { n = n + 1 }
    else { n = 0 }

    return n;

}

function countd() {

    if (n == 0) { n = max - 1 }
    if (n > 0) { n = n - 1 }


    return n;
}


btnf.addEventListener("click", function () {
    countup();

    var window = document.getElementById("window")

    window.firstElementChild.remove();
    console.log(window)
    console.log(n)


    photos.item(n).setAttribute("style", "")

    window.appendChild(photos[n]);
    console.log(photos.item(n))



});

btnb.addEventListener("click", function () {
    countd();

    var window = document.getElementById("window")

    window.firstElementChild.remove();
    console.log(window)
    console.log(n)


    photos.item(n).setAttribute("style", "")

    window.appendChild(photos[n]);
    console.log(photos.item(n))
    
   



});


var show = document.getElementById("btn")


function plays() {
    countup();

    var window = document.getElementById("window")

    window.firstElementChild.remove();
    console.log(window)
    console.log(n)


    photos.item(n).setAttribute("style", "")

    window.appendChild(photos[n]);
    console.log(photos.item(n))


};

let id;
function callSetinterval() {
    // call PrintFunction at an interval of 1 seconds
    id = setInterval(plays, 1000);
    document.getElementById("btn").disabled=true;

}




show.addEventListener("click", callSetinterval)


var stopbutton = document.getElementById("btn2");

function callClearinterval() {
    console.log("Current id: " + id)
    // clearing 
    clearInterval(id);
    document.getElementById("btn").disabled=false;
}

stopbutton.addEventListener("click", callClearinterval)


