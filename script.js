let boton_minimax = document.getElementById("minimax");
boton_minimax.addEventListener("click", (e) => {
    let categorias = document.getElementsByClassName("categoria");
    let filt = document.getElementById("filters");
    let contenido= document.getElementById("contenido");
    let boton = document.getElementById("botonminmax");

    for (cat of categorias) {
        if (cat.style.opacity == "0"){
            cat.style.opacity = "100";
            filt.style.width = "25%";
            contenido.style.width = "75%";
            boton.style.transform = "rotate(0deg)";
        }
        else{
            cat.style.opacity= "0";
            filt.style.width = "5%";
            contenido.style.width = "95%";
            boton.style.transform = "rotate(180deg)";
        }
    }
});

