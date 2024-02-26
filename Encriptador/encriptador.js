function encriptar() {

    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let comentario = document.getElementById("comentario");
    let dibujo = document.getElementById("dibujo");

    let textoEncriptado = texto.replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.length !=0) {
        document.getElementById("mensaje").value = textoEncriptado;
        document.getElementById("texto").value = "";
        tituloMensaje.textContent = "El mensaje se encriptó correctamente";
        comentario.textContent = "";
        dibujo.src = "Imagenes/check-mark.png";
        
    } 
    else {
        dibujo.src = "Imagenes/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje encontrado aún";
        comentario.textContent = "Ingrese el mensaje que desee encriptar o desencriptar";
        alert("Debes ingresar el texto que desee encriptar");
        return;
    }

}

function desencriptar() {

        let texto = document.getElementById("texto").value;
        let mensaje = document.getElementById("mensaje").value;
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let comentario = document.getElementById("comentario");
        let dibujo = document.getElementById("dibujo");

        let textoDesencriptado = mensaje.replace(/enter/gi, "e")
                                .replace(/imes/gi, "i")
                                .replace(/ai/gi, "a")
                                .replace(/ober/gi, "o")
                                .replace(/ufat/gi, "u");

    if(mensaje.length !=0){
         document.getElementById("texto").value = textoDesencriptado;
         document.getElementById("mensaje").value = "";
         tituloMensaje.textContent = "El mensaje fue desencriptado correctamente";
         comentario.textContent = "";
         dibujo.src = "Imagenes/check-mark.png";
         if (texto.length !=0) {
            document.getElementById("mensaje").value = textoDesencriptado;
            document.getElementById("texto").value = "";
            tituloMensaje.textContent = "El mensaje fue desencriptado correctamente";
            comentario.textContent = "";
            dibujo.src = "Imagenes/check-mark.png";
        } 
    }
    else{
         dibujo.src = "Imagenes/Muñeco.png";
         tituloMensaje.textContent = "Ningún mensaje encontrado aún";
         comentario.textContent = "Ingrese el mensaje que desee encriptar o desencriptar";
         alert("Debes ingresar el texto que desee desencriptar");
        return;
     }
}

function copiar(){
    let copiar = document.getElementById("mensaje");
    mensaje.select();
    mensaje.setSelectionRange(0,99999);
    document.execCommand("copy");  
    alert ("Mensaje copiado");  
}