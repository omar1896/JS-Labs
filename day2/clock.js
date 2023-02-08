alert("welcom to clock convertor");
var x=prompt("enter time in 24 form to convert to 12 form");

if (x<0 || x>24)
{alert("enter nums from  0 to 24 only");}
else {

if (x>=0&&x<12)
{
    if(x==0)
    alert("time is 12 AM");
    else
    {
        alert(  x + " AM");
    }

}
else {
    if (x==12)
    alert("time is 12 PM")
    else
    {alert(  x-12 +" pm" );}
}



}