class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0
    }

    login() {
        console.log('----------email-----login-----', email);
        return this;
    }

    logout() {
        console.log('----------email-----logout-----', email);
        return this;
    }

    updateScore() {
        this.score++;
        console.log('----------this.score----------', this.score);
        return this;
    }
}

class Admin extends User {

    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}

var userOne = new User('b@gmail.com', 'Brandon')
var userTwo = new User('a@gmail.com', 'Adam')
var admin = new Admin('c@gmail.com', 'Caden')

//Call Method
userOne.login()

//Method Chaining (for this to work you need to return this inside of the methods)
userOne.login().updateScore().updateScore().logout()

var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo)

