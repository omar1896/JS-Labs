
var email = document.getElementById("email")
console.log(email)
var img = document.getElementById("img")
console.log(img)

var valid = document.getElementById("invalidmsg")
console.log(invalidmsg)

var btn = document.getElementById("btn")
console.log(btn)
  var iid

//////////////////////////////////////////////////////////////////////////////////////////////////////

// var myrequest = new XMLHttpRequest();
// myrequest.open("GET", "https://reqres.in/api/users?page=2")
// myrequest.send();
// console.log(myrequest)

/////////////////////////////////////////////////////////////////////////////////////////////////////
// btn.addEventListener( "click", function () {
//     var iid = document.getElementById("input").value
//     console.log( iid)

//     if (myrequest.readyState === 4 && myrequest.status === 200) {


//         let jsdata = JSON.parse(myrequest.responseText)
//            console.log(jsdata)
//         for (let i = 0; i < jsdata.data.length; i++) {
//              console.log(jsdata.data[i].id)
//             if (iid == jsdata.data[i].id) {
//                 console.log(jsdata.data[i].id)
//               //  let div = document.createElement("img");

//                 img.setAttribute("src", jsdata.data[i].avatar)
//                 email.innerText= ` email: ${jsdata.data[i].email}`
//                 console.log(jsdata.data[i].avatar)

//                // document.body.appendChild(div);
//             } 
//         }

//     }
// });


//////////////////////////////////////////////////////////////////////////////////////////////////////////

function search(){
let result=fetch("https://reqres.in/api/users?page=2")
    .then(function (result) {
        console.log(result)
        var jsdata = result.json()
        console.log(jsdata)
        return jsdata
    })
    .then(function (jsdata) {
        console.log(jsdata)

         iid = document.getElementById("input").value
        
        for (let i = 0; i < jsdata.data.length; i++) {

          
            console.log(jsdata.data[i].id)
            if (iid == jsdata.data[i].id)
                return jsdata.data[i]
        }})

    .then(function (data) {
        console.log(data)


   img.setAttribute("src", data.avatar)

             email.innerText= ` email: ${data.email}`
               console.log(data.data[iid].avatar)

    }) }
    btn.addEventListener( "click", search)
