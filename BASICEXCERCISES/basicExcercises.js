//Nivel Bajo

//Ejercicio1
let myName = "Matias"
console.log (myName)
//Ejercicio2
let myLastName = "Martinez"
//Ejercicio3
let myAge = 22
//Ejercicio4
let myPet = "Isa"
//Ejercicio5
let petAge = 12
//Ejercicio6
let fullName = `${myName} ${myLastName}`
//Ejercicio7
let presentationText = `Me llamo ${fullName}, tengo ${myAge} años y un perro de ${petAge} años que se llama ${myPet}`
console.log(presentationText)

//Nivel Intermedio
//Ejercicio1
let sumAges = myAge + petAge
let restAges = myAge - petAge
let productAges = myAge * petAge
let divisionAges = myAge / petAge
//Ejercicio2
let studient = {
    nombre: "Matias",
    edad: 22,
    club: "Belgrano",
    color: "Celeste",
    deporte: "Fútbol"
}

console.table(studient)
console.log(studient.nombre)
console.log(studient.edad)
console.log(studient.club)
console.log(studient.color)
console.log(studient.deporte)
//Ejercicio3
let pet = {
    nombre: "Isa",
    sexo: "Hembra", 
    edad: 12,
    raza: "Callejera",
    color: "Blanca y negra",
}

console.table(pet)
console.log(pet.nombre)
console.log(pet.sexo)
console.log(pet.edad)
console.log(pet.raza)
console.log(pet.color)
//Ejercicio4
let frutas = ["Banana", "Durazno", "Ciruela", "Frutilla", "Mandarina"]

console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

//Dificultad Alta
//Ejercicio1
let IamAdult = prompt("Ingrese su edad") >= 18
console.log ("I am an adult", IamAdult)
//Ejercicio2
let numbers = [1, 2, 3, 4, 5]
console.log (numbers[0], numbers[1], numbers[2], numbers[3], numbers[4])
//Ejercicio3
let family = [
    {name: "Paula",
     edad: 49},
    {name: "Matias",
    edad: 22},
    {name: "Sergio",
    edad: 51},
    {name: "Franco",
    edad: 26},
    {name: "Isa",
    edad: 14}
]
console.log(family)
console.log (family[0])
console.log (family[1])
console.log (family[2])
console.log (family[3])
console.log (family[4])
//Ejercicio4
let randomText = frutas[1] + numbers[3] + family[4].name
console.log(randomText)