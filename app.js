let amigos = [];

//funcion para agregar nombre de amigo

function agregarAmigo() {
   
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();
    
    //mensaje por campo vacio
if (nombreAmigo === ""){
    alert ("Por favor, inserte un nombre. ");
    return;
}
    //mensaje si nombre se repite
if (amigos.includes(nombreAmigo)) {
    alert (`El nombre ${nombreAmigo} ya esta en la lista`);
    return;

}

    
};

