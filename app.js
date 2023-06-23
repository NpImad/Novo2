
const dogs = [
    {food:35, weight: 50, owner:["Pussy Cat"]},
    {food: 40, weight: 60, owner: ["Mesar"]},
    {food: 60, weight: 100, owner: ["Almir Suljevic"], pet: "Vukovi"},
    {food: 10, weight: 30, owner: ["Julia,Kate"]},
]

// dogs.forEach((dog) => {
//     return
// }



// )

for (let i = 0; i < dogs.length; i++){
    dogs[i] = {
        ...dogs[i],
        recommendedFood: {(dogs[i].weight * 0.75 * 28) / 1000 }
    }
}
console.log(dogs);