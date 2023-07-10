// const randomNumbers = [2, 5, 30, 32, 45, 50];
// let reversedArray = [];

// for(let i = randomNumbers.length - 1; i > 0; i --){
//     // console.log(randomNumbers[i]);
//     reversedArray.push(randomNumbers[i]);
// }
// console.log(randomNumbers);
// console.log(reversedArray);

const randomNumbers = [128, 30, 69, 52, 223, 99];

let maxNum = 0;

for(let i = 0; i < randomNumbers.length; i++){
     if(randomNumbers[i] > maxNum){
        maxNum = randomNumbers[i];
     }
}
console.log(maxNum);