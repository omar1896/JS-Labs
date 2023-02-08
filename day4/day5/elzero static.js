/*
  Class
  - Static Properties And Methods
*/

class User {
    // Static Property
    static count = 0;
  
    constructor(id, username, salary) {
      this.i = id;
      this.u = username;
      this.s = salary;
    User.count++;
    }
  
    // Static Methods
    static sayHello() {
      return `Hello From Class`;
    }
    static countMembers() {

      return `${User.count} Members Created`;//alse this.count is possible
    }
  }
  
  let userOne = new User(100, "Elzero", 5000);
  let userTwo = new User(101, "Ahmed", 5000);
  let userThree = new User(102, "Sayed", 5000);
  
  console.log(userOne.u);
  console.log(userTwo.u);
 // console.log(userOne.count);
  console.log(User.count);
  console.log(User.sayHello());
  console.log(User.countMembers());