"Use strict"
// Declar variables en Js
// var variable global
// let variable
// const es una constante
// let y const se crean por que son variables con alcance o scope

// let edad = prompt("Dame tu edad");
// Number(edad);
// console.log(edad + 5);
// console.logty(typeof(edad + 5));
// console.log(name);
// document.write(name);

// Tipos de datos

// let text = "Mi nombre es Rosa 'Otro texto'";
// let numero = 4;
// String(numero);
// Number(numero);

// let boolean = true;
// let menor = (10==="10")
// console.log(menor);

// let fecha = new Date();

// Operadores aritmeticos
// let suma= 1+2;
// let resta= 1-2;
// let multiplicacion= 1*2;
// let division= 1/2;
// let mod = 10 % 5; //Residuo

// let uno = 1;
// uno++;
// console.log(uno); //incremento

// let dos = 2;
// dos--;
// console.log(dos);

// // Operadores relacionales

// let mayor = 5 > 3;
// let menor = 3 < 5;
// let mayorigualque = 20 >= 10;
// let menorigualque = 20 <= 10;
// let igual = 10 == "10";
// let exactamenteigual = 10 === "10";
// let diferente = 10 != 30;
// let mayorIgual = 10 >= 5;

// Tipos de datos especiales/compuestos
// Array = vectores/conjunto de datos y pueden ser diferentes tipos
let frutas = ["pera","manzana","platano", null];
let numeros = ["cinco", 6, 23, "veinte","5"];
// Objetos
let persona = {nombre: "rosa", edad: 38, correo: "rcruz12@ucol.mx"};

// Objecto JSON (Javascript Objetc Notation)- Formato de intercambio de datos ligero y descriptivo
let personas = [
    {nombre: "rosa", edad: 18, correo: "rcruz12@ucol.mx"},
    {nombre: "aslan", edad: 18, correo: "amendoza_7@ucol.mx"},
    {nombre: "carlos", edad: 19, correo: "carlos_23@gmail.com"},
    persona,
];

// Operadores lógicos o boolean
// AND o Y
let numero1 = 9;
let numero2 = 16;
let and = (numero1 > 10 && numero2> 10);
// Para que un and sea verdadera todas las condiciones deben de ser verdaderas.
// Si UNA sola es falsa el resultado sera falso

// Or u O
let or = (numero1 > 10 || numero2> 10);
// Para que un or sea verdadero se debe de cumplir UNA sola condicion
// Si TODAS son falsas el resultado sera falso

// Not o negación
let negacion = !(numero1 > 10);

