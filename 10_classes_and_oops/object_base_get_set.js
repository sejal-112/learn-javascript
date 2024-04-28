const User = {
    _email: '123@example.com',
    _password: "abc",

    get email() {

        return this._email.toUpperCase();

    },

    set email(value) {
        this._email = value
    }
}


const tea = Object.create(User) // kis object ke basis pe naya funciton create karke dun
console.log(tea.email) // jitni bhi properties hain function ko bhih ek special method ki tarah le rha hai isliye () lagane ki zaroorat nhi hai


