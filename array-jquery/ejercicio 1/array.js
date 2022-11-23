function randomArray() {
    var arregloRandom = [];
    var cantidadNumeros = document.getElementById("cantidad");

    //loop para agregar los números random
    for (let i=0; i!=cantidadNumeros.value;i++) {
        var numeroRandom = Math.floor(Math.random()*100);
        //console.log(numeroRandom);                        //DEBUG
        arregloRandom.push(numeroRandom);
        //console.log(arregloRandom);                       //DEBUG
    }
    //console.log(arregloRandom);                           //DEBUG

    //sorting del arreglo
    var arregloOrdenado = arregloRandom.sort(function(a,b){return a-b});
    //console.log(arregloOrdenado);                         //DEBUG

    /*EN ESTA PARTE SE DEBERÍA COMPROBAR QUE NO EXISTAN ELEMENTOS
    EN LA LISTA, DE FORMA QUE EMPIECE DE CERO. SI NO ESTUVIERA
    VACÍA, SE PROCEDERÍA A ELIMINARLOS ANTES DE AGREGAR NADA.*/


    //agregado de elementos al DOM
    //obtención del ID del elemento DENTRO DEL QUE INSERTAREMOS los elementos:
    var soyTuPadre=document.getElementById("lista");
    arregloOrdenado.forEach(elemento => {
        var tag=document.createElement("li");
        var numero=document.createTextNode(elemento);
        //insertamos NUMERO dentro de TAG:
        tag.appendChild(numero);
        //insertamos el nuevo ELEMENTO en LA LISTA:
        soyTuPadre.appendChild(tag);
    })
}