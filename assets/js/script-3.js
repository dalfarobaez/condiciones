// recuperando valores
const casilla1 = document.querySelector("#primer-valor")
const casilla2 = document.querySelector("#segundo-valor")
const casilla3 = document.querySelector("#tercer-valor")
const validacion = document.querySelector("#validacion")
const respuesta = document.querySelector("#respuesta")


validacion.addEventListener('click',()=>{
    const contrasena = casilla1.value + casilla2.value + casilla3.value
    console.log(contrasena);
    casilla1.value = null
    casilla2.value = null
    casilla3.value = null

    if(contrasena=="911"){
        respuesta.innerHTML = "Password 1 correcto"
    }
    else if (contrasena=="714"){
        respuesta.innerHTML = "Password 2 correcto"
    }
    else {
        respuesta.innerHTML = "Password incorrecto"
    }

})

