const inputAgregar = document.getElementById("inputAgregar");
const btnAgregar = document.getElementById("btnAgregar")
const inputEliminar = document.getElementById("inputEliminar");
const btnEliminar = document.getElementById("btnEliminar");
const listaCompras = document.getElementById("listaCompras");
const mensajeEstado = document.getElementById("mensajeEstado");


btnAgregar.addEventListener("click", () => {
    mensajeEstado.textContent = "";
    const textoProducto = inputAgregar.value;

    if (textoProducto.trim() === "") {
        mensajeEstado.textContent = "El nombre del producto no puede estar vacio o contener solo espacios"
        return;
    }

    const nuevoLi = document.createElement("li");

    nuevoLi.textContent = textoProducto.trim();
    listaCompras.appendChild(nuevoLi);

    inputAgregar.value = "";
});

btnEliminar.addEventListener("click", () => {
    mensajeEstado.textContent = "";
    const productoBuscado = inputEliminar.value.trim();

    if(productoBuscado === "") {
        mensajeEstado.textContent = "Ingrese un nombre de producto válido para eliminar."
        return;
    }

    const elementosLista = listaCompras.children;
    let encontrado = false;

    for(let i = 0; i < elementosLista.length; i++) {
        let itemActual = elementosLista[i];

        if (itemActual.textContent.trim().toLowerCase() === productoBuscado.toLowerCase()) {
            listaCompras.removeChild(itemActual);
            encontrado = true;
            break;
        }
    }

    if(!encontrado) {
        mensajeEstado.textContent = `el producto ${productoBuscado} no se encuentra en la lista `
    }

    inputEliminar.value = "";
});