function conversion() {
    var dolares = document.getElementById("dolares");
    dolares.setAttribute("value",parseInt(document.getElementById("pesos").value)/300);
}

document.getElementById("boton").onclick=conversion();