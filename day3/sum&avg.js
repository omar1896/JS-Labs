alert("sum and avg task");
var i=Number(prompt("how many numbers do u want to sum"));
var nums=[];
for(var x=0;x<i;x++)
{nums[x]=Number (prompt("enter num "+(x+1)));}
var sum=0;
for(x=0;x<i;x++)
{
   sum+=nums[x];

}
 var avg;
 avg=sum/i;
alert( "sum =" + sum );

alert("avg ="+ avg);

