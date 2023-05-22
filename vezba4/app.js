// const nasCustomObject = {
//     odeljenje: "3-10",
//     dukserica: "zelena",
//     ja:"ne znam",
//     godine: 30,
//     brojLaptopa: 9,
// };
// function ourFirstObjection(){
//     console.log(this.godine, "Ovo je call funkcija");
// }
// ourFirstObjection.call(nasCustomObject);

// function ourFirstCallFunction(argumentFirst, argumentSecond){
//     console.log('${argumentFirst} ima ${this.godine} doina i ${argumentSecond} mu je ${this.dukserica}' );
       
// };
// ourFirstObjection.call(nasCustomObject, "aldin", "Kapa");
// ourFirstObjection.apply(nasCustomObject, "aldin", "Kapa")

// const nekiArray = {
//     najveciLopov: "Haris Gorcevic",
//     nadimak: "Djobu",
//     pokrao:"Sve kuce u Karajukice",
//     godine: 18,
// }

// function outFirstCallFunction(){
//     console.log(`ima ${this.godine} i najveci je lopov${this.najveciLopov}`);
// }
// outFirstCallFunction.call(nekiArray);

const user = [
    {
        id: 1,
    name: "Imad",
    age: 3,
    driving: "everything",
    },
    {
        id: 2,
    name: "Mudja",
    zanimanje: "cigan",
    age: 23,    
    },
    {
        id: 3,
    name: "Esko",
    zanimanje: "Prodavnica",
    age:"18",
    },
]

// allUsers.map((map) => checkingUserAge.call(user));
const ourDeletedFunction = function(id){
    allUsers.filter((user) => user.id !== id && user.id !== id2 );

}
console.log(ourDeletedFunction(2,3));