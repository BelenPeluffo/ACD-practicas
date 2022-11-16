function conversion() {
    //document.getElementById("pesos").value=document.getElementById("dolares")*300;
    var pesos = document.getElementById("pesos");
    pesos.setAttribute("value",parseInt(document.getElementById("dolares").value)*300);
}

document.getElementById("boton").onclick=conversion();