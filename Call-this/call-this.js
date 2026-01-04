function setusername(username){
    this.username = username
}


function createUser(username, email, password){
    setusername.call(this, username)
    this.email = email
    this.password = password
}

let user = new createUser('anurag', 'anurag@123', '123456')
console.log(user);