class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}Sejal`;
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

const sejal = new User("user@example.com", "abcd");

console.log(sejal.password);
console.log(sejal.email);




