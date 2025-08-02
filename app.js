// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de todos los amigos
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre válido");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // Limpia el campo
    mostrarListaAmigos(); // Actualiza la lista de amigos
}

function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de agregar más

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos amigos para hacer el sorteo.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let asignaciones = {};
    let amigosRestantes = [...amigos];

    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        let posibles = amigosRestantes.filter(a => a !== amigo);
        
        if (posibles.length === 0) {
            sortearAmigo();
            return;
        }

        const elegido = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones[amigo] = elegido;
        amigosRestantes.splice(amigosRestantes.indexOf(elegido), 1);
    }

    for (let amigo in asignaciones) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${asignaciones[amigo]}`;
        resultado.appendChild(li);
    }
}

function sortearUno() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>${amigoSorteado} ha sido seleccionado</li>`;
}
