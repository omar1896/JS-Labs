alert("welcome to my calculator");
var result;

var num1=Number (prompt("enter first number"));
do{
   
var op=prompt("enter operator (+,-,/,*)");
var num2= Number(prompt("enter second number"));

if(isNaN(num1))
{alert("invalid  first num");}

if(isNaN(num2))
{alert("invalid  second num");}

if(op=="+")
{result=num1+num2;
    alert(result);}
else if (op=="-")
{result=num1-num2;
    alert(result);}
else if(op=="*")
{result=num1*num2
    alert(result);}
else if(op=="/")
{result=num1/num2;
alert(result);}
else{alert("invalid operator")}



if(!isNaN(result))
  { num1=result;}

}while (!confirm("do u want to exit"));
