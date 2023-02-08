alert("welcome")
do {
    var age = Number(prompt("enter an age"));
    if (age <= 0 && age != null) { alert("please enter positive numbers only") }
    else {
        if (age > 0 && age <= 10)
            alert("you are child");
        if(age >10 && age <= 18)
        alert("teenager");
        if(age > 18 && age <= 50)
        alert("grown up");
        if(age > 50)
        alert("adult");
    }
  




}
while (confirm("do u want to continue"));





