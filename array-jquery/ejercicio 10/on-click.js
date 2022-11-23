$(document).ready(function(){

    //EJERCICIO 10
    $("#clickear").click(function() {
        alert("Capturamos el evento del primer <p>");
    });

    //EJERCICIO 11
    $("#ejercicio-11 tbody tr").on({
        mousedown: function() {
            $(this).css("background-color","blueviolet");
        },
        mouseup: function() {
            $(this).css("background-color","white");
        }
    });

    //EJERCICIO 12
    $("li").click(function() {
        $(this).hide();
    });

    //EJERCICIO 14
    $(".mostrar").click(function() {
        $(this).after("<div class='insertar my-2'><label class='form-label'>Nombre de la clase</label><input class='form-control' value='"+$('.descripcion').attr('class')+"' disabled readonly></div>");

    });

    //EJERCICIO 15
    $(".desaparecer").click(function() {
        $("#desaparece tbody tr td").each(function(){
            //console.log(this);        //DEBUG
            $(this).html("-");
        })
    })

    //EJERCICIO 16
    $(".revelar").click(function(){
        let ancla="#ancla-cambiante";
        //console.log($(this).html());  //DEBUG
        let boton=$(this).html();
        if (boton.includes("1")) {
            $(ancla).attr("href","#holis");
            $(ancla).html("Holi");  
        } else if (boton.includes("2")) {
            $(ancla).attr("href","#khe-onda");
            $(ancla).html("Khe onda"); 
        } else {
            $(ancla).attr("href","#nos-vimo");
            $(ancla).html("Nos vimo"); 
        };
    })

    //EJERCICIO 17
    $("strong").click(function() {
        $(this).hide();
    })

    //EJERCICIO 18
    $("#ejercicio-18 tbody tr").mouseenter(function() {
        $(this).css("background-color","coral");
    })

    //EJERCICIO 19
    {
    var versionAnterior=$("#ejercicio-19").clone();
    //console.log(versionAnterior);                 //DEBUG
    //console.log(versionAnterior.attr("id"));      //DEBUG
    $("#ejercicio-19 tbody tr").on({
        mouseenter: function() {
            $(this).css("color","coral");
            $(this).css("font-weight","bold");
        },
        mouseleave: function() {
            $("#ejercicio-19").replaceWith(versionAnterior);
        }
    })
    //console.log(versionAnterior.attr("id"));      //DEBUG
}

    //EJERCICIO 20
    {
        $("#redimensionable").dblclick(function() {
            $(this).toggleClass("redimension");
        })
    }

    //EJERCICIO 22
    $("#tu-signo").change(function() {
        console.log($(this).val());
    })

    //EJERCICIO 23
    $("#no-se-mueve-mas").click(function() {
        event.preventDefault();
        console.log($(this).attr("href"));
    })

    //EJERCICIO 24
    //Tomemos el nombre y el signo, y digámosle que el formulario ya se envió.
    $("#no-se-manda-mas").click(function() {
        event.preventDefault();
        $(this).after("<p class='my-2'>El formulario se envío (de mentiritas).</p>")
    })
  });