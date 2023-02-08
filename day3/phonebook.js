alert("welcome to phonebook");
x = 0;
var phonebook = [];

do {
    var func = String(prompt("which operation do u want (add - search - exit)"));
    if (func == "add") {
       
        var n = prompt("enter name");
        
        var num = prompt("enter number");
      
        


        var ob = { name:n,number:num };
        phonebook[x]=ob;
        alert("**name and number stored**");
       x++;
    }
    else if(func=="search")

    { var sea=prompt("enter phone or name u want to get") ; 
    var s=phonebook.filter(obj=>obj.name===sea||obj.number==sea);
      
   
     console.log(s);
     alert(JSON.stringify(s));}


} while (func != "exit");



