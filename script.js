let textArea = document.querySelector(".textarea-encriptar");
let mensaje = document.querySelector(".textarea-desencriptar");
let btnEncriptar = document.querySelector(".btn-encriptar");
let textoSectionDos = document.querySelector(".texto-section-dos");
let btnDesencriptar = document.querySelector(".btn-desencriptar");
let btnCopiar = document.querySelector(".btn-copiar");
let message = document.querySelector("#message");

function botonEncriptar(){
    let textoInicial = encriptar(textArea.value);
    mensaje.value = textoInicial;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

 btnEncriptar.onclick= botonEncriptar;
 
 function ocultar(){
    textoSectionDos.classList.add("ocultar");
}

function encriptar(fraseEncriptada){
    ocultar()
    let llaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    fraseEncriptada = fraseEncriptada.toLowerCase();

    for(let i = 0; i < llaves.length; i++){
        if(fraseEncriptada.includes(llaves[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(llaves[i][0], llaves[i][1]);
        }
    }
    return fraseEncriptada;
}

function botonDesencriptar(){
    let textoInicial = desencriptar(textArea.value);
    mensaje.value = textoInicial;
    textArea.value = "";
}

btnDesencriptar.onclick = botonDesencriptar; 

function desencriptar(fraseDesencriptada){
    let llaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    fraseDesencriptada = fraseDesencriptada.toLowerCase();

    for(let i = 0; i < llaves.length; i++){
        if(fraseDesencriptada.includes(llaves[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(llaves[i][1], llaves[i][0]);
        }
    }
    return fraseDesencriptada;
}

btnCopiar.onclick = copiar;

function copiar () {
    let texto = mensaje.value;
    navigator.clipboard.writeText(texto);
  }

  


  
  


