// recuperando cantidades 
const cant1 = document.querySelector("#cant1")
const cant2 = document.querySelector("#cant2")
const cant3 = document.querySelector("#cant3")
const validacion = document.querySelector("#validacion")
const btn = document.querySelector("#btn")

btn.addEventListener('click',()=>{
    const valor1 = Number(cant1.value)
    const valor2 = Number(cant2.value)
    const valor3 = Number(cant3.value)
    const suma = valor1 + valor2 + valor3

    console.log(suma);
    
    if(suma<=10) {
        validacion.innerHTML = "Llevas " + suma + " Stickers"
    }
    else{
        validacion.innerHTML = "Llevas demasiádos Stickers"
    }
})

