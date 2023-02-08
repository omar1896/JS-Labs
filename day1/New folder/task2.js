alert("it's the first realease of a calculator that only has asummation feature");
var x =Number( prompt("enter first number"));
var y =Number( prompt("enter second number"));

summ(x,y);


function summ(a,b){
    var res=a+b;
    if (isNaN(res))
{alert("NOT VALID ****");}
else{alert(res);}
}



