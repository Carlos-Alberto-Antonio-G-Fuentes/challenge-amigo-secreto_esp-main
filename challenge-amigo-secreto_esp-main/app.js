let amigosIngresados = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre.");
        return;
    }
    
    if (amigosIngresados.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }
    
    amigosIngresados.push(nombre);
    actualizarListaAmigos();
    input.value = "";
}

function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigosIngresados.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigosIngresados.length < 2) {
        alert("Debe ingresar al menos 2 amigos para el sorteo.");
        return;
    }
    
    let amigosDisponibles = [...amigosIngresados];
    let resultado = {};
    
    amigosIngresados.forEach(amigo => {
        let posiblesAmigos = amigosDisponibles.filter(a => a !== amigo);
        
        if (posiblesAmigos.length === 0) {
            alert("No se puede realizar el sorteo. Inténtalo nuevamente.");
            return;
        }
        
        let elegido = posiblesAmigos[Math.floor(Math.random() * posiblesAmigos.length)];
        resultado[amigo] = elegido;
        amigosDisponibles = amigosDisponibles.filter(a => a !== elegido);
    });
    
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    for (let [amigo, asignado] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `a ${amigo} le corresponde  ${asignado}`;
        listaResultado.appendChild(li);
    }
}
