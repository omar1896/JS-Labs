
var bod=document.getElementById("container")

var add=document.getElementById("add");



btn.addEventListener("click", function () {
  

  var c = document.getElementById("input").value
  if (c.length < 1) { return } else {
    var old = document.getElementById("old");


    var xx = new Date();

    var newContent = document.createTextNode(document.getElementById("input").value);
    var dt = document.createTextNode(`Added since: ${xx.toUTCString()}`);


    var newDiv = document.createElement("div");

    var add = document.getElementById("add");
    newDiv.appendChild(newContent);
    add.appendChild(newDiv)
    var d = document.createElement("p");

    d.appendChild(dt);
    d.setAttribute("class", " col-md-12  bg-primary ")
    d.setAttribute("style", " font-size: small; ")



    newDiv.setAttribute("class", "col-md-10 border rounded border-primary  ");
    newDiv.setAttribute("style", "overflow-y: auto; ");
    d.setAttribute("class", "col-12 col-sm-12 border border-top-0  border-primary bg-success bg-gradient ");


    let btny = document.createElement("button");
    btny.innerHTML = "&#10004;";
    btny.setAttribute("class", "col-md-1 col-sm-12 btn btn-outline-success");
    btny.setAttribute("style", "font-size:100%");

    btny.onclick = function () {

    newDiv.setAttribute("style", " text-decoration: line-through; background-color:  rgb(157, 250, 211); overflow-y: auto;");

    console.log("test")
  

    };
    add.appendChild(btny)

    let btnx = document.createElement("button");
    btnx.innerHTML = "&#10008;";
    btnx.setAttribute("class", "col-md-1 col-sm-12 btn btn-outline-danger");

    btnx.onclick = function () {
console.log()
      newDiv.parentNode.removeChild(newDiv);
      btnx.parentNode.removeChild(btnx)
      btny.parentNode.removeChild(btny)
      d.parentNode.removeChild(d)

    };
    add.appendChild(btnx)

    add.appendChild(d)


 

    document.getElementById("input").value = "";
    old.parentNode.removeChild(old);
    
  }
  
 
      
  
})































// let stored=add.innerHTML
// console.log(stored);
   
//   localStorage.setItem("innerofadd",stored)


// function store(){
//   let stored=bod.innerHTML
//   console.log(stored);

//   localStorage.setItem("innerofadd",stored)
// }




// function restoref(){

//   let restore = localStorage.getItem("innerofadd")
  
//   console.log(restore)
//   add.innerHTML= restore
// }


/**d1.insertAdjacentHTML('afterend', '<div id="two">two</div>'); */


/**var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>";
var doc = new DOMParser().parseFromString(xmlString, "text/xml");
console.log(doc.firstChild.innerHTML); // => <a href="#">Link...
console.log(doc.firstChild.firstChild.innerHTML); // => Link */


// window.addEventListener("onunload",store)
 //window.addEventListener("onload",restoref)
 //window.onunload=store()
//window.onload=restoref()


