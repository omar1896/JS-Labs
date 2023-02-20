
var st= document.getElementById("newtasks")
  
  $("#btn").on("click", function () {



    console.log(task)
  
    var par = $("<div style='width:100% ;margin:2px;border:2px solid grey ;' class='pa'>  <button type='button' style='width:10%;' id='delbtn'> delete </button> </div>")
  
  
  
    var task = document.createTextNode($("#input").val())
    console.log(task)
    par.append(task)
    console.log(par)
  
    $("#newtasks").append(par)
    
  
    var delbtn = $("#delbtn")
    console.log(delbtn[0])
  
   
  
  })
  
  
  $("#newtasks").on("click", "button","", function (e) {
    console.log(this)
  
    $(this).parent().remove()
  
    console.log("delegation done")
  });



function storef (){
  var st= document.getElementById("newtasks")
  var tostore= st.innerHTML
  localStorage.setItem("innerofpar",tostore)
  console.log(tostore)}

  
  
  function restoref(){

  let restore = localStorage.getItem("innerofpar")
  
  console.log(restore)
  st.innerHTML= restore
}

window.onbeforeunload = storef;
window.onload=restoref()
