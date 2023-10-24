// Codigo que el pida al usuario su edad y si es mayor de edad le pregunte su nombre y apellido y lo salude en el DOM
// Si no, le ponga en el DOM lo siento, no eres mayor de edad

let edad = prompt("¿Cual es tu edad?");
if (edad >= 18) {
    let nombre = prompt("Escribe un nombre y un apellido")
    document.write ("Hola"+" "+nombre);
} else {
    document.write ("Lo siento, eres menor de edad");
}