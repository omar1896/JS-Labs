class Human {
    #salary
    static counter=0;
       constructor (firstName, lastName) {
         this.firstName = firstName|| "no name"
         this.lastName = lastName
        // this.#salary=salary;
        // console.log(this)
         Human.counter++;
        // console.log("from parent con");
        
       } 
      get salary(){
        return this.#salary;
      }
      set salary(newsal){
        this.#salary= newsal>2000?newsal:2000;
      }
     }





     class person extends Human{
        constructor(firstName,lastName,age){
        super(firstName,lastName);
        this.age=age
       // console.log("from child con");
     }
     sayhi(){
        console.log("hi")
     }
    }
    

    
     var ali=new person("ahmed", "ali",20,1000);
     var omar =new person("ahmed","ali",25,3000);
     ali.salary=3000;
   // alert( ali.salary);
    //console.log(person.prototype);
    //console.log(Human.prototype);
 //  alert(JSON.stringify(ali));
   //ali.sayhi();


   class Test{
    constructor(name){
        this.name=name; }
    hello(){
        console.log("hello")
    }
   }
   console.log(Test.prototype);
   var test1=new Test("science");
   console.log(test1);
   Test.prototype.hithere=function(){console.log("hi")};
   Object.prototype.welcom=function(){};

  var myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: false,
  enumerable: true,
  configurable: false,
  value: 3,
});