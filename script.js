// a --- ai
// e --- enter
// i --- imes
// o --- ober
// u --- ufat

function encriptar() {
    var texto = document.querySelector("#texto-ingresado").value;
    var textoEncriptado = texto.replace(/e/igm,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/igm,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/igm,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/igm,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/igm,"ufat");

    document.querySelector(".robot").style.display ="none";
    document.querySelector(".mensaje-ningun").innerHTML = "Aquí tienes tu resultado:";
    document.querySelector("#texto-resultado").style.display ="inherit";
    document.querySelector("#texto-resultado").innerHTML = textoEncriptado;
    document.querySelector(".copiar").style.display = "block";
    
    

}

function desencriptar () {
    var texto = document.querySelector("#texto-ingresado").value.toLowerCase();
    var textoEncriptado = texto.replace(/enter/igm,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/igm,"o");
    var textoEncriptado = textoEncriptado.replace(/imes/igm,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/igm,"a");
    var textoEncriptado = textoEncriptado.replace(/ufat/igm,"u");

    document.querySelector(".robot").style.display ="none";
    document.querySelector("#texto-resultado").style.display = "inherit";
    document.querySelector("#texto-resultado").innerHTML = textoEncriptado;
    document.querySelector(".copiar").style.display = "block";
    

}



const textoACopiar = document.querySelector("#texto-resultado");
const botonCopiar = document.querySelector(".copiar");


   
 botonCopiar.addEventListener("click", async ()=> {
        await navigator.clipboard.writeText(textoACopiar.value);
       
        document.querySelector("#texto-resultado").style.display ="none";
        document.querySelector(".robot").style.display ="inherit";
        document.querySelector("#texto-ingresado").value= "";

    
    });


    var botonModo = document.querySelector(".boton-modo");
    botonModo.addEventListener("click", ()=>{
        document.body.classList.toggle("dark");
        botonModo.classList.toggle("activo");
    })

