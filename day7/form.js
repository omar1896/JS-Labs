document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100%";
var btn=document.getElementById("but")

btn.addEventListener("click",function(event){

event.preventDefault();
var user="admin";
var Password= 123;

var usnam=document.getElementById("username").value;
var pass=document.getElementById("pass").value;

var result= usnam.localeCompare(user);
var result2=pass.localeCompare(Password);
console.log(result)
if(result==0&&result2==0)
{alert("welcome login success");}
if(result==0&&result2!=0)
{alert("invalid password");}
if(result!=0&&result2==0)
{alert("invalid username");}
if(result!=0&&result2!=0)
{alert("invalid username and password")}
    
})




function sub(){


var user="admin";
var Password="123";
alert("hello");
var usnam=document.getElementById("username").value;
var pass= String (document.getElementById("pass").value);

var result= usnam.localeCompare(user);
var result2=pass.localeCompare(Password);
if(result==0&&result2==0)
{alert("welcome login success");}
if(result==0&&result2!=0)
{alert("invalid password");}
if(result!=0&&result2==0)
{alert("invalid username");}
if(result!=0&&result2!=0)
{alert("invalid username and password")}

};