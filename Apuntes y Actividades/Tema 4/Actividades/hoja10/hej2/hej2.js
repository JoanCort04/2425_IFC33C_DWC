document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM(){
    let formulario = document.getElementById("formulario");
    let boton = document.getElementById("button");

    formulario.addEventListener("submit", (e)=>{
        alert("formulario enviado");
        console.log(e);});
        

        
    boton.addEventListener("click", (e)=>{alert("buton clickado")
        console.log(e);
        e.stopPropagation();
        e.preventDefault();
    });
    

    console.log(formulario);
    console.log(boton);

}