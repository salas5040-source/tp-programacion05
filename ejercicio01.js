console.log("Inicio")

function prepararPizza(tipo) {
    return new Promise((resolve, reject) => {
        console.log("creacion de la promesa y se ejecuta su funcion");

        setTimeout(() => {
            resolve(`Pizza de ${tipo} lista`)
        }, 1000);
    });
}

assync funcion prepararPedido() {
    let variedad = prompt(`ingrese la variedad de pizza solicitada:`);
    console.log("preparando pedido...")

    try{
        let resultado = await prepararPizza(variedad);
        console.log(resultado);
    }
    catch(error) {
        console.log("Error al cargar el pedido", error)
    }
}

setTimeout(() => {
    console.log(`tarea de setTimeout`)
}, 3000);

prepararPedido();
console.log(`Fin`);
