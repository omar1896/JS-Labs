alert("hello");

class Employee {
    #salary = 1000;
    #healthRate = 50;
    constructor(fullName, id,ismanager, money, sleepMood, healthRate, email, workmood) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
        this.id = id;
        this.email = email;
        this.workmood = workmood;
       
        this.ismanager = ismanager;



    }
    Sleep = function (hours) {
        if (hours == 7) { this.sleepMood = "happy"; alert(`Im ${this.sleepMood}`) }
        else if (hours < 7) { this.sleepMood = "tired"; alert(`Im ${this.sleepMood}`) }
        else if (hours > 7) { this.sleepMood = "lazy"; alert(`Im ${this.sleepMood}`) };
    }

    Eat = function (meals) {
        if (meals == 3) { this.#healthRate = "100"; }
        else if (meals == 2) { this.#healthRate = "75"; }
        else if (meals == 1) { this.#healthRate = "50"; }
    }

    Buy = function (NofItems) { this.money -= NofItems * 10; alert(`money= is ${this.money}`); }

    work(hours) {
        if (hours == 8) { this.workmood = 'happy'; alert(`Im ${this.workmood}`) }
        else if (hours > 8) { this.workmood = "tired"; alert(`Im ${this.workkmood}`) }
        else if (hours < 8) { this.workmood = "lazy"; alert(`Im ${this.workkmood}`) }
    }
    set salary(sal) {
        if (sal >= 1000) { this.#salary = sal; } else { this.#salary = 1000; }
        // alert("salary updated");
    }
    set healthRate(hr) {
        if (hr > 0 && hr <= 100) {
            this.#healthRate = hr;
        } else { this.#healthRate };
    }
    get salary() {
        return this.#salary;
    }
    get healthRate() {
        return this.#healthRate;
    }
}

class Office {

    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    getallemp() {
        for (var i = 0; i < this.employees.length; i++)
            alert(JSON.stringify(this.employees[i]));


    }
    getempbyid(empid) {

        var s = this.employees.filter(obj => obj.id === empid);
         
        return s;
    }
    hire(nam, id) {
        
       
        var emp = new Employee(nam, id);
        this.employees.push(emp);
   
       

    }
    hiremanger(nam, id, s) {
       
        var emp = new Employee(nam, id, s);
        this.employees.push(emp);

    }
    fire(empid) {
        var l = this.employees.length;

        const n = this.employees.findIndex(object => { return object.id === empid });
       // console.log(n);
        var temp = this.employees[n];
        this.employees[n] = this.employees[l - 1];
        this.employees[l - 1] = temp;
        this.employees.pop();

        //return this.employees;
    }

}


const off = new Office('x');
do {
    
    var func = Number( prompt("Enter function number\n 1-add employee\n 2-gett all office's employees\n 3-search for emp by id\n 4-delete an employee by id\n 5-add salary \n 6-show salary \n 7-exit"));
    switch (func) {
        case 1: 
            var mngoremp =  Number( prompt("you want to hire 1- manager or 2-employee "));
            switch (mngoremp) {
                case 1: var nn = prompt("enter name ");
                do{   
                    var iid = prompt("enter id ");
                    const n = off.employees.findIndex(object => { return object.id === iid });
                        if(n!=-1){alert("this id is taken please enter another one");}

                }while(  off.employees.findIndex(object => { return object.id === iid })!=-1)
               
                    var sure = prompt("enetr yes to confirm  him as manager")

                    off.hiremanger(nn, iid, sure);
                    alert("manager stored");

                  
                    break;
                case 2: 
                 var nn = prompt("enter name ");
              
                do{   
                    var iid = prompt("enter id ");
                    const n = off.employees.findIndex(object => { return object.id === iid });
                        if(n!=-1){alert("this id is taken please enter another one");}

                }while(  off.employees.findIndex(object => { return object.id === iid })!=-1)
               
                     
                     off.hire(nn, iid);
                     alert("employee stored");
                     
                    
                    break;
                default: alert("please enter 1 or 2 only");
            }
            break;
        case 2: off.getallemp();
            break;
        case 3: var xx = prompt("enter employee id");
           var o= off.getempbyid(xx);
           if(o.length==0){alert("not found")}else{
           alert(JSON.stringify(o));}
            break;
        case 4: var xx = prompt("enter id to delete him from the office")
            off.fire(xx);
            break;
        case 7: var exit = true;
        break;
        case 5: var xx = prompt("enter employee id");
        var o= off.getempbyid(xx);
        if(o.length==0){alert("not found")}else{
        
        var sal=Number(prompt("add salary"))
               o.salary=(sal);}
               
               break;
        case 6: var xx = prompt("enter employee id");
        var o= off.getempbyid(xx);
        if(o.length==0){alert("not found")}else{   
            alert(o);} 
            break;   


        default: alert("enter valid num");

    }
} while (exit!=true);

