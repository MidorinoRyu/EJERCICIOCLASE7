let boton = document.querySelector(".btn");
boton.addEventListener("click",addpkm)

function addpkm(){
    let nombre = document.getElementById("nombre").value
    let imagen = document.getElementById("imagen").value
    let numero = document.getElementById("numero").value
    

    let parrafo = document.querySelector(".finalpoke")

 
   parrafo.innerHTML = `<img src="${imagen}">  <h4>${nombre}</h4> <br/> <h4>Su numero es el ${numero}</h4>`; 
}
