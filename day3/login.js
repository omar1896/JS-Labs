alert("login task")
var user="admin";
var Password="421$$"
var x =prompt("enter your Username");
var y=prompt("enter your Password");
var result= x.localeCompare(user);
var result2=y.localeCompare(Password);
if(result==0&&result2==0)
{alert("welcome login success");}
if(result==0&&result2!=0)
{alert("invalid password");}
if(result!=0&&result2==0)
{alert("invalid username");}
if(result!=0&&result2!=0)
{alert("invalid username and password");}