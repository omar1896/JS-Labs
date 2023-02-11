

//var task= document.getElementById("input").value
//var newDiv = document.createElement("div");
//newDiv.appendChild(task);

//var add=document.getElementById("add");
//document.body.insertBefore(newDiv, add);

var btn = document.getElementById("btn");

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





    };
    add.appendChild(btny)

    let btnx = document.createElement("button");
    btnx.innerHTML = "&#10008;";
    btnx.setAttribute("class", "col-md-1 col-sm-12 btn btn-outline-danger");

    btnx.onclick = function () {

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




