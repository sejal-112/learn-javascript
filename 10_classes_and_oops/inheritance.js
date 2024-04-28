class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const tea = new Teacher("tea", "tea@teacher.com", "123");
tea.addCourse();

const masalaTea = new User("masalaChai");
masalaTea.logMe();

console.log(tea === Teacher);
console.log(tea instanceof Teacher)

