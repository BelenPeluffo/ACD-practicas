function mostrarResultado() {
    var nombre = document.getElementById("cliente");
    var material = document.getElementById("material");
    var dimension = document.querySelector("input[name='dimension']:checked")
    var cuadroResultado=document.getElementById("resultado");
    
    //Se concatenan los values y se muestra en el textarea
    cuadroResultado.value=nombre.value+
    " ha pedido una caja de "+
    material.value+
    " con unas dimensiones "+
    dimension.value;
}