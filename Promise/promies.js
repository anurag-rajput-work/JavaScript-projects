let promiseOne =  new Promise((resolve, reject) => {
setTimeout(() => {
console.log("async task is completed");
resolve()
}, 1000)
}) 

promiseOne.then(() => {
console.log("promise is resolved");
})

// 2nd promise

new Promise(function(resolve, reject){
setTimeout(() => {
console.log("async task 2");
resolve()
}, 1000)
}).then(() => {
console.log("promiseTwo is resolved");    
})

// 3rd promise

let promisethree = new Promise(function(resolve, reject){
setTimeout(function(){
resolve({username :  "Anurag", password : "123456", email :  "anurag@123"})
}, 1000)
})

promisethree.then((user) => {
console.log(user);
})

// 4th promise

let promiseFourth = new Promise( function(resolve, reject){
setTimeout(() => {
let error  =  true
if (!error) {
resolve({username :  "Anurag", password : "123456", email :  "anurag@123"})
}else{
reject("error in promise")
}
})
})

promiseFourth.then( function(user){
return [user.username, user.email]
}).then( function([username, email]){
console.log(`email is ${email} and username is ${username}`);
}).catch( function(error){
console.log(error);
}).finally( function(){
console.log("promise 4th is compelted"); 
})

// 5th promise

let promiseFifth = new Promise( function(resolve, reject){
    setTimeout(() => {
        let error  =  false
        if (!error) {
            resolve({username :  "Adarsh", password : "321", email :  "adarsh@example.com"})
        }else{
            reject("JS : something went wrong")
        }
    })
})
 
async function ConsumedpromiseFifth(){
    try {
       let response = await promiseFifth
       console.log(response);
 
    } catch (error) {
        console.log(error);
 
    }
}
 
ConsumedpromiseFifth()
 
// fetch API with Async and await

async function GetaUser() {
    try {
        let response = await fetch('https://api.freeapi.app/api/v1/public/randomusers')
        let result = await response.json()
        const users = result.data.data; // array of users
        const user = users[0]; // particular user
        // console.log(user);
        console.log(user.name.first, user.email);
        // console.log(result);
    } catch (error) {
        console.log("error :  ", error);
    }
}

GetaUser()

// Fetch API with then and catch

fetch('https://api.freeapi.app/api/v1/public/randomusers')
.then( function(response){
    return response.json()
}).then( function(result){
    const users = result.data.data; 
    const user = users[0];
      console.log(user.name.first, user.email);
}).catch( function(error){
    console.log("error :  ", error);
})

