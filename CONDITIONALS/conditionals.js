function verificarNumero(num){
    return !isNaN(num)
}

//Dificultad Baja

//Ejercicio1
/*let num1 = 6
let num2 = 5
if (num1 > num2) {
    console.log(num1)}
else{
    console.log(num2)
}*/

//Ejercicio2
/*if(num1 > num2) {
    console.log(num1)
}
else if (num2 > num1){
    console.log(num2)
}
else{
    console.log("The numbers are equal")
}*/

//Ejercicio3
/*if (num1 === num2){
    console.log("The numbers are equal")
}
else{
    console.log("The numbers are different")
}*/

//Ejercicio4
/*let date1 = "2018-9-2"
let date2 = "2023-7-5"

if(date1 > date2){
    console.log(`The date ${date1} is greater than ${date2}`)
}
else if (date2 > date1){
    console.log(`The date ${date2} is greater than ${date1}`)
}
else{
    console.log("The dates are the same")
}*/

//Ejercicio5
/*let date3 = "2018-9-2"
let date4 = "2023-7-5"

if(date4 > date3){
    console.log(`The date ${date4} is greater than ${date3}`)
}
else if (date3 > date4){
    console.log(`The date ${date3} is greater than ${date4}`)
}
else{
    console.log("The dates are the same")
}*/

//Ejercicio6
/*let number1 = 5
let number2 = 5
let number7 = 9

if(number1 >= number2 && number1 >= number7){
    console.log(`The number ${number1} is largest`)
}
else if(number2 > number1 && number2 > number7){
    console.log(`The number ${number2} is largest`)
}
else{
    console.log(`The number ${number7} is largest`)
}*/

//Dificultad Media

//Ejercicio1
/*let color = prompt("Ingrese un color")

switch(color){
    case "red": console.log("The color of passion");break
    case "blue": console.log("The color of the sea"); break
    case "green": console.log("The color of nature"); break
}
*/
//Ejercicio2

/*function calculadoraSimple(){
    let valor1 = Number(prompt("Ingrese un numero"))
    let valor2 = Number(prompt("Ingrese un numero"))
    if (!verificarNumero(valor1) || !verificarNumero(valor2)){
        return "Debes ingresar un numero"
    }
    let operacion = prompt("Ingrese una operacion: suma, resta, multiplicacion o division")
    switch(operacion){
        case "suma": console.log(valor1 + valor2); break
        case "resta": console.log(valor1 - valor2); break
        case "multiplicacion": console.log(valor1 * valor2); break
        case "division": console.log(valor1 / valor2); break
        default: console.log("La opcion elegida no es una operacion"); break
    }
}
calculadoraSimple()*/


//Ejercicio3
/*let person1 = {
    name: "Juan",
    age: 20,
    height: 1.69
}

let person2 = {
    name: "Maria",
    age: 21,
    height: 1.58
}

let mayor = ""
let altura = ""
let menor = ""
let bajo = ""

if (person1.age > person2.age){
    mayor = person1.name
    menor = person2.name
}
else{
    mayor = person2.name
    menor = person1.name
}
if (person1.height > person2.height){
    altura = person1.name
    bajo = person2.name
}
else{
    altura = person2.name
    bajo = person1.name
}

console.log(`${mayor} is older than ${menor} and ${altura} is taller than ${bajo}`)*/

//Ejercicio4
/*function carnetConducir(){
    let personName = prompt("Ingrese su nombre");
    let vision = Number(prompt("Ingrese su nivel de vision del 1 al 10"))
    let personAge = Number(prompt("Ingrese su edad"));
    let height = Number(prompt("Ingrese su altura"));
    if (!verificarNumero(vision) || !verificarNumero(personAge) || !verificarNumero(height)){
        return "Debes ingresar un numero en tu altura, edad y vision"
    }
    if (personAge >= 18 && height >= 110 && vision >= 8 && vision <= 10){
        return "Estas calificado para sacar el carnet de conducir"
    }
    else{
        return "No estas calificado para sacar el carnet de conducir"
    }
}
console.log(carnetConducir())*/



//5

/*function categoria(){
    let edad = +prompt("Ingresar tu edad")
    if(!verificarNumero(edad)){
        return "Ingresar un numero"
    }
    
    if (edad >= 0 && edad <= 13){
        return "Tu categoria es infantil"
    } else if (edad >= 13 && edad <= 18){
        return "Tu categoria es adolescente"
    } else if (edad >= 19 && edad <= 45){
        return "Tu categoria es adulto"
    } else if (edad > 45 && edad < 100){
        return "Tu categoria es anciano"
    } else if (edad >= 100){
        return "¿En serio eres tan mayor?"
    }
}

console.log (categoria())
*/
//6

/*function unoDosTres(){
    let numero = Number(prompt("Ingrese un numero del 1 al 3"))
    switch (numero){
        case 1: return `El numero ingresado es [${numero}]`; break
        case 2: return `Dos veces el numero ingresado es [${numero}]`; break
        case 3: return `Tres veces el numero ingresado es [${numero}]`; break
        default: return "Ese valor no esta permitido"
    }
}

console.log(unoDosTres())*/

//Ejercicio Dificil
/*function entrada(){
    let nombre = prompt("Ingresar tu nombre")
    if(nombre === "" || nombre == null){
        return "Debes ingresar tu nombre"
    }else if (nombre === "Matias"){
    return `Bienvenido ${nombre}`
    }

    let pass = prompt("Ingresa si tu pase es 'vip' o 'normal'")
    if(pass != "vip" && pass != "normal"){
        return "Debes ingresar las palabras 'vip' o 'normal'"        
    }
    else if (pass == "vip"){
        return `Bienvenido ${nombre}`
    }

    let ticket = prompt("Tienes ticket? Responder 'si' o 'no'")
    if(ticket != "no" && ticket != "si"){
        return "Debes escribir 'si' o 'no'"
    } else if (ticket == "si"){
        return `Bienvenido ${nombre}`
    } else{
        let quieroTicket = prompt("Quieres comprar un ticket? Responder 'si' o 'no'")

        if(quieroTicket != "no" && quieroTicket != "si"){
            return "Debes escribir 'si' o 'no'"
        }
        else if(quieroTicket == "no"){
            return `Adiós ${nombre}`
        }
        else{
            let dinero = Number(prompt("Cuanto dinero tienes?"))
            if (!verificarNumero(dinero)){
                return "Debes ingresar cuanto dinero tienes"
            }
            else if(dinero >= 1000){
                return `Operación exitosa, Bienvenido ${nombre}`
            }
            else{
                return `No tienes suficiente dinero, adiós ${nombre}`
            }
        }
    }
}

console.log(entrada())*/