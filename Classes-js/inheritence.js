class User {
  constructor(username) {
    this.username = username;
  }
  logme() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`this course is added by ${this.username}`);
  }
}

let anurag = new Teacher("anuu", "anuu@abc.com", 123);

anurag.addCourse();

let anuu = new User("anuu");
anuu.logme();

// Static Method :  it is a function which is not associated with any instance of the class.
 // we use this function when we need to a function but we don't need to use an instance of the class.