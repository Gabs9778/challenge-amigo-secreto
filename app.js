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
//agregar nombre en array de amigos
    amigos.push(nombreAmigo);

    //limpiar campo de entrada
    inputAmigo.value = "";

    //Actualiza lista del HTML
    actualizarLista ();
    
}
 
    //funcion para actualizar lista en la interfaz

    function actualizarLista() {
        const listaAmigos = document.getElementById("listaAmigos");
    
    //limpia contenido actual de la lista
    listaAmigos.innerHTML = "";

   //array con ciclo for
   for (let i = 0 ; i < amigos.length; i ++ ){
   const li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
   }

}



