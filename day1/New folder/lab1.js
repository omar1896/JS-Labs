
var fname = prompt("please enter your first name");
var lname = prompt("please enter your last name");
if (fname != null && fname.length > 0 && lname != null && lname.length > 0) {

    var birthYear = prompt("enter your year of birth");
    if (birthYear != null && birthYear.length > 0 && fname != null && fname.length > 0 && lname != null && lname.length > 0) {
        var age = (2023 - birthYear);
        document.write("HELLO " + fname + " " + lname + " you are " + age + "years old\n");

    }

    else {

        alert("data isnot valid ** please enter your year of birth as '1995'");

    }
}
else { alert("data isnot valid **please enter your first and last name"); }
