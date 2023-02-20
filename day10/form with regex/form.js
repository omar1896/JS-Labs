//var regex = /^\S+@+\b(.com){1}/

var regexofemail = /^\S+@\S+\.\S+$/;
var regexofpassdigit = /\S+\d{1,}/;
var passofcapital = /[A-Z]{2,}/;
var passofsmal = /[a-z]{3,}/
// var email = "omaralaa0989@gmail."
// var valid = regex.test(email)
// console.log(valid)



var btn = document.getElementById("but")
// var email=document.getElementById("email")
// var password=document.getElementById("pass").value=""
// var passvalid=document.getElementById("passvalid").style.color="green"
// var emailvalid=document.getElementById("emailvalid")

btn.addEventListener("click", function (event) {

    event.preventDefault();
    var flag;
    var email = document.getElementById("email").value
    if (regexofemail.test(email) == true) {
        document.getElementById("email").style.borderColor = "green"
        document.getElementById("emailvalid").style.color="green"
        emailvalid.innerText = "valid"
    } else {
        emailvalid.innerText = "notvalid-email must contain @/.com /no spaces"
        document.getElementById("email").style.borderColor = "red";
    }

    var password = document.getElementById("pass").value
    if (regexofpassdigit.test(password)) {
        if (passofcapital.test(password)) {
            if (passofsmal.test(password)) {
                document.getElementById("pass").style.borderColor = "green"
                document.getElementById("passvalid").style.color="green"
                passvalid.innerText = "valid"
                flag = 2
            } else {
                document.getElementById("passvalid").style.color = "brown"
                passvalid.innerText = "password should contain atleast 3 lower cases"
                password = document.getElementById("pass").value = ""
                document.getElementById("pass").style.borderColor = "red";
            }
        }
        else {
            document.getElementById("passvalid").style.color = "brown"
            passvalid.innerText = "password should contain atleast two upper case"
            password = document.getElementById("pass").value = ""
            document.getElementById("pass").style.borderColor = "red";
        }


    } else {
        document.getElementById("passvalid").style.color = "brown"
        passvalid.innerText = "password should contain a mix of atleast a numbers /2 uppercases/atleast 3 lowercases"
        console.log(email)
        password = document.getElementById("pass").value = ""
        document.getElementById("pass").style.borderColor = "red";
    }

    if (flag == 2) { 
        
        setTimeout( validate ,2000)}

})

function validate(){
    alert(`your email  \n password saved`)
}