// let a = 5;


// function prva(){
//     console.log(a);
// }
// function druga(){
//     let a = 7;
//     console.log(a);
// }
// function treca(){
//     let a = 3;
//     console.log(a);
// }

// prva()
// druga()
// treca()


// function createUser(userName, userLastname){
//     return{
//         name: userName,
//         lastname: userLastname,
//     }
// }
// const userImad = createUser("imad","Midovic")
// console.log(userImad);


class User {
    phone;
    verzija;
    constructor(phone, verzija){
    this.phone = phone;
    this.verzija = verzija;
    }
}
const mojTel = new User("Samsung" , "S23")
console.log(mojTel);
