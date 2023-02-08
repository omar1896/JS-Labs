function Person(fullName,money,sleepMood,healthRate){
    this.fullName=fullName;
    this.money=money;
    this.sleepMood=sleepMood;
    this.healthRate=healthRate;
}
Person.prototype.Sleep=function (hours){if(hours==7) {this.sleepMood="happy";console.log(`Im ${this.sleepMood}`)}
else if(hours<7) {this.sleepMood="tired";console.log(`Im ${this.sleepMood}`)}
else if(hours>7) {this.sleepMood="lazy";console.log(`Im ${this.sleepMood}`)};}

Person.prototype.Eat=function (meals){if(meals==3) {this.healthRate="100";console.log(`My health rate is ${this.healthRate}`)}
else if(meals==2) {this.healthRate="75";console.log(`My health rate is ${this.healthRate}`)}
else if(meals==1) {this.healthRate="50";console.log(`My health rate is ${this.healthRate}`)};}

Person.prototype.Buy=function (NofItems) {this.money-=NofItems*10;console.log(`money= is ${this.money}`);}




let omar=new Person('omar alaa',500,"tired",78);
(omar.Sleep(7));
(omar.Sleep(8));
(omar.Sleep(4));

(omar.Eat(3));
(omar.Eat(2));
(omar.Eat(1));

(omar.Buy(5));
