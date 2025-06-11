import PromptSync from "prompt-sync";
import chalk from "chalk";
import CliTable3 from "cli-table3";
const prompt = PromptSync();


/* Crear sistema de ingreso de estudiantes */
const estudiantes = [];

function addStudent (nombre, notas) {
    const estudiante = {
        'nombre': nombre, 
        'notas': notas,
    }
    estudiantes.push(estudiante);
}
function listStudent() {
   for(const estudiante of estudiantes) {
    console.log(estudiante);
   }
}

function searchStudent(nombre, arr) {
    for(estudiante of arr) {
        if(estudiante.nombre.toLowerCase() === nombre.toLowerCase()) {
            console.log(`Estudiante encontrado: ${estudiante['nombre']}`);
        }
    }
    if(estudiante.nombre.toLowerCase() !== nombre.toLowerCase()) {
        console.log(`Estudiante ${nombre.toUpperCase()} no encontrado.`);
    }
}
function averageNotes(estudiante, arr) {
    for(const alumno of arr) {
        if (estudiante.toLowerCase() === alumno.nombre.toLowerCase()) {
            const notas = alumno.notas;
            let acumulador = 0;
            for (const nota of notas) {
                acumulador += nota;
            }
            const promedio = acumulador / notas.length;
            console.log(`El promedio de notas de ${estudiante} es: ${promedio}`);

        }
      }
    }


/* listStudent()
searchStudent('adrian', estudiantes); */
