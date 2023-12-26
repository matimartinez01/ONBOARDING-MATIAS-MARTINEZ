function verificarNumero(num){
    return !isNaN(num)
}
//Ejercicios facil
//1
/*function numerosDelUnoAlCien() {
    let numeroUnoAlCien = Number(prompt("Ingrese un numero del 1 al 100"))
    if(!verificarNumero(numeroUnoAlCien) || numeroUnoAlCien > 100 || numeroUnoAlCien < 0){
        return "Ingresar un numero del 1 al 100"
    }

    for (let i = numeroUnoAlCien; i >= 0; i--){
    console.log(i)}
}
numerosDelUnoAlCien()*/

//2
/*function multiplicarUnoAlDiez() {
    let numeroUnoDiez = Number(prompt("Ingrese un numero del 1 al 10"))
    if(!verificarNumero(numeroUnoDiez) || numeroUnoDiez > 10 || numeroUnoDiez <= 0){
        return "Ingresar un numero del 1 al 10"
    }

    for (let i = 0; i <= 10; i++){
    console.log(`${numeroUnoDiez} x ${i} = ${i * numeroUnoDiez}`)}
}

console.log(multiplicarUnoAlDiez())*/

//3
/*let suma = 0
function sumaNumerosIngresados(){
    let numeroIngresado = 1
    
    while (numeroIngresado != 0){
        suma = suma + numeroIngresado
        numeroIngresado = Number(prompt("Ingrese numeros y seran sumados, cuando ingrese 0 se mostrara el total"))
        if(!verificarNumero(numeroIngresado)){
        return "Ingresar un numero del 1 al 10"
    }
    }
    suma = suma - 1
    return `El total de la suma es: ${suma}` 
}

console.log(sumaNumerosIngresados())*/

//4

/*function sumaNumerosIngresadosDoWhile(){
    let suma = 0
    let numeroIngresado = 0
    
    do{
        suma = suma + numeroIngresado
        numeroIngresado = Number(prompt("Ingrese numeros y seran sumados, cuando ingrese 0 se mostrara el total"))
        if(!verificarNumero(numeroIngresado)){
            return "Ingresar un numero"
        }
    } while (numeroIngresado != 0)
    return `El total de la suma es: ${suma}`
}

console.log(sumaNumerosIngresadosDoWhile())*/

//5
/*let persona = {
    nombre: "Matias",
    apellido: "Martinez",
    edad: 22,
    hobbie: "Futbol",
    color_favorito: "Celeste"
}

for (let key in persona){
    console.log(`${key}`)
}

//6
for (let key in persona){
    console.log(`${persona[key]}`)
}*/

//Dificultad Media
//1 Para poder verlo sacarle el comentario tambien al ejercicio 3 de nivel facil

/*let numeroAleatorio = suma
function adivinarNumero(){
    let numeroAdivinador = 0
    let intentos = 0
    while (numeroAleatorio != numeroAdivinador){
        numeroAdivinador = Number(prompt("Ingrese un numero"))
        intentos = intentos + 1
        if (numeroAdivinador > numeroAleatorio){
            console.log("El numero que quieres adivinar es menor")
        } else if(numeroAdivinador < numeroAleatorio){
            console.log("El numero que quieres adivinar es mayor")
        } else if(numeroAdivinador == numeroAleatorio){
                return `Felicidades, el numero secreto era ${numeroAleatorio} y has realizado ${intentos} intentos`
        } else{ 
            console.log("Debes ingresar un numero")
        } 
    }
}

console.log(adivinarNumero()) */

//2
/*function divisoresNumero(){
    let numeroDividir = Number(prompt("Ingrese un numero"))
    let multiplos = []
    if(!verificarNumero(numeroDividir)){
        return ("Debes ingresar un numero")
    }
    for (let i = 0; i <= numeroDividir; i++){
        if (numeroDividir % i === 0){
            multiplos.push(i)
        }
    }
    return multiplos.join(", ")
}

console.log(divisoresNumero())*/

//3
/*function RingBell() {
    return "Ding Dong"
}
function timbre(){
    cantidadTimbre = Number(prompt("Ingrese la cantidad de veces que queres tocar el timbre"))
    let tocarTimbre = "Ding Dong"
    if (!verificarNumero(cantidadTimbre)){
        return "Debes ingresar un numero"
    }
    for (let i = 0; i < cantidadTimbre - 1; i++){
        tocarTimbre = tocarTimbre + ", " + RingBell()
    }
    return tocarTimbre
}

console.log(timbre())*/

//4
/*const dateLimit = "1997-8-3"
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]
let fechaMayor = []

function fechasMayores() {
    for (let i = 0; i < dates.length; i++){
        if (dates[i] >= dateLimit){
            fechaMayor.push(dates[i])
        }
    }
    return fechaMayor
}

console.log(fechasMayores())*/

//5-6
/*function mostrarColores() {
    let colores = ["Rojo", "Verde", "Azul", "Violeta", "Marron", "Negro", "Blanco"]
    let colorArray = []
    for (const color of colores){
        colorArray.push(color)
        }
    return colores.join(" ")
}
mostrarColores()*/

//7
/*let numerosArray = [3, 5, 6, 9, 12]
for (let numero of numerosArray){
    console.log(`El numero es ${numero} y su doble es ${numero * 2}`)
    }*/

//8
/*let familia = [
    {nombre: "Matias", apellido: "Martinez", rol: "Hijo", edad: 22},
    {nombre: "Franco", apellido: "Martinez", rol: "Hijo", edad: 26},
    {nombre: "Sergio", apellido: "Martinez", rol: "Padre", edad: 52},
    {nombre: "Paula", apellido: "Ferrero", rol: "Madre", edad: 49},
]

function presentacionFamilia(){
    for (let familiar of familia){
        console.log(`Hola, me llamo ${familiar.nombre} ${familiar.apellido} (${familiar.rol}) y tengo ${familiar.edad} años`)
    }
    
}
presentacionFamilia()*/

//Ejercicio dificil
//1
/*function sumaNumerosParImpar(){
    let sumaPar = 0
    let numeroIngresado = 0
    let sumaImpar = 0
    
    do{
        if(numeroIngresado % 2 === 0){
            sumaPar = sumaPar + numeroIngresado
        } else{
            sumaImpar = sumaImpar + numeroIngresado
        }
        numeroIngresado = Number(prompt("Ingrese numeros y seran sumados segun sean pares o impares. Cuando ingrese 0 se mostrara el total"))
        if(!verificarNumero(numeroIngresado)){
            return "Ingresar un numero"
        }
    } while (numeroIngresado != 0)
    return `El total de la suma de numeros pares es: ${sumaPar} \nEl total de la suma de numeros impares es: ${sumaImpar}`
}
console.log(sumaNumerosParImpar())*/

//2
/*let arrayNumerosMayor = [5, 9, 2, 11, 5, 23, 8, 2, 14, 3]
let numeroMayor = 0
for(let i = 0; i < arrayNumerosMayor.length; i++){
    if(arrayNumerosMayor[i] > numeroMayor){
        numeroMayor = arrayNumerosMayor[i]
    }
}
console.log(numeroMayor)*/
