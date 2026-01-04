class user {
     constructor(username, email, password){
        this.username =  username
        this.email =  email
        this.password = password
     }

     encrptPassword(){
        return `${this.password}anuu`
     }

     ChangeUsername(){
      return `${this.username.toUpperCase()}`
     }
}

let userone = new user('anurag', 'anurag@123', '123456')
console.log(userone);
console.log(userone.encrptPassword());
console.log(userone.ChangeUsername());

// Without classes 

function createUser(username, email, password) {
   this.username =  username
   this.email =  email
   this.password = password
}

createUser.prototype.encrptPassword =  function(){
   return `${this.password}anuu`
}

createUser.prototype.ChangeUsername =  function(){
   return `${this.username.toUpperCase()}`
}

let addy =  new createUser('addy', 'addy@123', '987')
console.log(addy.encrptPassword());
console.log(addy.ChangeUsername());
