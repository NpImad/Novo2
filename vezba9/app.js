
// class Bus {
//     constructor{sedista, boja}{
//         this.color = boja;
//         this.sedista = sedista;
//     }
//     helloBus{}{
//         console.log("cao");
//     }

// {
// }

// const lasta = new Bus(55, "zelena");

// console.log(lasta);
// lasta.hellobus();

// lasta.changeColor("Zuta");
// console.log(lasta);

// const bojaAutobusa = lasta.getColor();
// console.log(bojaAutobusa);\


class Pet {
    legNum;
    tail;


    constructor(noge, rep){
     this.legNum = noge;
     this.tail = rep;
    }
}

class Cat extends Pet {
    name;
    color;

    constructor(noge, rep, ime, boja){
        super(noge, rep);
        this.name = ime;
        this.color = boja;
    }
    // getTail(){
    //     return this.tail;
    // }
}
const ourCat = new Cat (4, "Yes", "Sladjan", "bela")
// const ourDog = new Dog(4, "Yes", "Sladjana", "grey")
console.log(ourCat);

// console.log(ourDog);

