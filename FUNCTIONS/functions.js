//Ejercicio fácil
//1
/*let add = (num1, num2) => num1 * num2
    
console.log(add(100, 20))*/

//Ejercicio medio
//1
/*function greet(name){
    return `Hola ${name}`
}

console.log(greet("Matias"))*/

//2
/*let multiplicacion = (num1, num2) => num1 * num2
console.log(multiplicacion(2, 8))
console.log(multiplicacion(5, 4))*/

//3
/*function area(base, altura){
    return `El área del triangulo es: ${(base * altura) / 2}`
}
console.log(area(5, 3))


//4
function perimeter(a, b, c){
    return `El perimtetro del triangulo es: ${a+b+c}`
}

console.log(perimeter(2, 5, 6))*/

//5
/*function precioTotal(precio, cantidad){
    let total = precio * cantidad
    if(cantidad >= 10 && cantidad < 20){
        let descuento = total * 0.1 
        total = total - descuento
        return total
    }
    else if (cantidad >= 20){
        let descuento = total * 0.2
        total = total - descuento
        return total
    }
    else{
        return total
    }
}

console.log(precioTotal(10, 20))*/

//6
/*function isAnAdult(age){
    if (age >= 18){
        return `You are an adult`
    }
    else{
        return `You aren't an adult`
    }
}

console.log(isAnAdult(19))*/

//Dificultad alta
//1
/*function impuestosAPagar(ingresos){
    if (ingresos <= 10000){
        let tax = ingresos * 0.10
        return tax
    }
    else if (ingresos > 10000 && ingresos <= 20000){
        let tax = ingresos * 0.15
        return tax
    }
    else{
        let tax = ingresos * 0.20
        return tax
    }
}

console.log(impuestosAPagar(20000))*/

//2
/*function verificarNumero(num){
    return !isNaN(num)
}

function diaLaboral(a){
    if (verificarNumero(a)){
        if (a >= 1 && a <= 5){
            return "Hoy es dia laboral"
        }
        else if (a == 6 || a == 7){
            return "Hoy es fin de semana"
        }
        else{
            return "Ingresar un numero del 1 al 7"
        }
    } else{
        return "Ingresar un número del 1 al 7"
    }
}

console.log(diaLaboral(5))*/

//3
/*function crearPersona(){
    let nombreObject = prompt("Ingrese su primer nombre")
     if(nombreObject === ""){
        return "El nombre no puede estar vacío"
     }

    let apellidoObject = prompt("Ingrese su apellido")
     if(apellidoObject === ""){
        return "El apellido no puede estar vacío"
     }
    let edadObject = +prompt("Ingrese su edad")
     if(!verificarNumero(edadObject) || edadObject === 0){
        return "La edad debe ser un número"}

    let persona = {
        nombre: nombreObject, 
        apellido: apellidoObject, 
        edad: edadObject}
    return persona
}

console.log(crearPersona())*/

//4
/*function saludo(nombre){
         return `Hola, mi nombre es ${nombre}`
}


function calcularEdad(añoNacimiento, añoActual){
    let edad = añoActual - añoNacimiento
    return edad
}

function saludoNombreEdad () {
    let nombre = prompt("Ingresa tu nombre")
    if(nombre === ""){
        return "El nombre no puede estar vacío"}

    let añonacimiento = Number(prompt("Ingresa tu año de nacimiento"))
    let añoActual = Number(prompt("Ingresa el año actual"))
    if(!verificarNumero(añonacimiento) || !verificarNumero(añoActual) || añonacimiento == 0 || añoActual == 0){
        return "Los años deben ser numeros"
    }
    return `${saludo(nombre)} y tengo ${calcularEdad(añonacimiento, añoActual)} años`
}

console.log(saludoNombreEdad())*/