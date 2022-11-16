function secreto() {
    var numeroSecreto=4;
    var numeroUsuario=parseInt(document.getElementById("numero").value);
    var intento=document.getElementById("adivinanza");
    intento.value=numeroUsuario==numeroSecreto ? "Acertaste" : "Fallaste";
}