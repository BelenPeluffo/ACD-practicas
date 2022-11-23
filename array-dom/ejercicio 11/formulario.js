function conversion() {
    var fahrenheit = document.getElementById("fahrenheit");
    fahrenheit.setAttribute("value",(parseInt(document.getElementById("celsius").value)*1.8)+32);
}

document.getElementById("boton").onclick=conversion();