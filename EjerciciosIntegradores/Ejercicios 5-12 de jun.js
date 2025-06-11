/* Ejercicio 1: Raices cuadradas de un array */

let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function generarCuadrado(arr) {
    let cuadrados = arr.map ((num) => num * num, 0)
    return cuadrados;
}
const cuadrados = generarCuadrado(numberArr);       /* Mismo nombre para diferenciar respuestas */
console.log(cuadrados);

/* Ejercicio 2: Añadir prefijos a nombres */
let nombres = ['Juan', 'Ana', 'Pedro', 'Maria'];
function agragarPrefijo(arr, prefijo) {
    let prefijos = []
    for (let i = 0; i < arr.length; i++) {
        prefijos.push(prefijo + arr[i]);
    }
    return prefijos
}

const prefijos = agragarPrefijo(nombres, 'Sr. ');
console.log(prefijos);

/* Ejercicio 3: convertir temperaturas (Celcius to fahrenheit) 
        Formula: F = C*1.8+32 
*/

let temperaturas = [0, 20, 30, 40];
function convertirTemperaturas(arr) {
    let fahrenheit = arr.map((temp) => temp * 1.8 + 32, 0);
    return fahrenheit;
}
const fahrenheit = convertirTemperaturas(temperaturas);
console.log(fahrenheit);


/* Ejercicio 4: Dado un array de objetos con personas, devolver un array con solo el nombre */
const PERSONAS = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Pedro', edad: 40 },
    { nombre: 'Maria', edad: 35 }
]
function extraerNombres(arr) {
    let nombres = arr.map((persona) => persona.nombre, 0);
    return nombres;
}
const nombresPersonas = extraerNombres(PERSONAS);
console.log(nombresPersonas);

/* Ejercicio 5: Dado un array de strings, devolver todos los strings en MAYUSCULA */
let palabras = ['perro', 'gato', 'elefante', 'jirafa'];
function wordsToUpperCase(arr) {
    let palabrasEnMayus = arr.map((strings) => strings.toUpperCase(), 0)
    return palabrasEnMayus;
}
let palabrasEnMayus = wordsToUpperCase(palabras);
console.log(palabrasEnMayus);