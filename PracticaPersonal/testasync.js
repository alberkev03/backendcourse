function testRandom (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let numero = Math.floor(Math.random() * 10);
            if (numero > 5) {
                resolve(`El número ${numero} es mayor que 5.`)
            }
            else {
                reject(`El número ${numero} es menor que 5.`)
            }
        }, 2000)
    })
}

async function elDiavlo() {
    try {
        let resultado = await testRandom();
        console.log(resultado);
    }
    catch(error) {
        console.log(error);
    }
}
elDiavlo()

function testeo() {
    setTimeout(() => {
        new Promise((resolve) => {
            if (1 == true){
                resolve (console.log('Todo bien'))
            }
        })
    }, 1000);
}

async function devolverTexto() {
    try {
        let test = await testeo();
    } 
    catch(error) {
    console.log(error)
    }
}
devolverTexto()