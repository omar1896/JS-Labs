alert("it's the first realease of a calculator that only has asummation feature");
var x =Number( prompt("enter first number"));
var y =Number( prompt("enter second number"));
var res=a+b;
summ(x,y);

 // function imp****
function summ(a,b){
    var res=a+b;
    if (isNaN(res))
{document.write("NOT VALID ****");}
else{document.write(res);}
}



