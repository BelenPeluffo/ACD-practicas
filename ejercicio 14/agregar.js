function agregar() {
    var nombres = [];
    var nombre=document.getElementById("nombre");
    nombres.push(nombre.value);     

    var nodoPadre = document.getElementById("nodo-padre");
    var itemLista = document.createElement("li");
    itemLista.innerHTML=nombre.value;
    itemLista.setAttribute("class","list-group-item")
    nodoPadre.appendChild(itemLista);

}