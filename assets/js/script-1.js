const boton = document.querySelector('.contenedor-imagen')
const imagen = document.querySelector('.img-P1')

boton.addEventListener("click",()=>{
    imagen.classList.toggle("borde-rojo")
})