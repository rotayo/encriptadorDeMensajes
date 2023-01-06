var botonEncriptar = document.getElementById("encriptador");
var botonDesencriptar = document.getElementById("desencriptador");

var rectangunlo = document.getElementById("rectangulo");

var textoEnRectangulo = document.createElement("textarea");
textoEnRectangulo.id = "rectangulo-resultado-texto";

var botonCopiar = document.createElement("button");
botonCopiar.textContent = "Copiar"
botonCopiar.id = "rectangulo-boton";

function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                textoEncriptado = textoEncriptado + "ai";
                break;
            case "e":
                textoEncriptado = textoEncriptado + "enter";
                break;
            case "i":
                textoEncriptado = textoEncriptado + "imes";
                break;
            case "o":
                textoEncriptado = textoEncriptado + "ober";
                break;
            case "u":
                textoEncriptado = textoEncriptado + "ufat";
                break;
            default:
                textoEncriptado = textoEncriptado+texto[i];
                break;
        }
    }

    //Borra todos los hijos
    while (rectangulo.firstChild) {
        rectangunlo.removeChild(rectangulo.firstChild);
    }
    
    if (textoEncriptado == "") {
        textoEncriptado = "No hay ningún mensaje escrito"
    }

    //Se setea el contenido del textarea y luego se añade como hijo
    textoEnRectangulo.textContent = textoEncriptado;
    rectangulo.appendChild(textoEnRectangulo);
    rectangulo.appendChild(botonCopiar);
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = "";
    let palabraEncriptada = "";
    let buscarPalabra = true;

    for (let i = 0; i < texto.length; i++) {
        if (buscarPalabra) {
            switch (texto[i]) {
                case "a":
                    palabraEncriptada = "a";
                    buscarPalabra = false;
                    break;
                case "e":
                    palabraEncriptada = "e";
                    buscarPalabra = false;
                    break;
                case "i":
                    palabraEncriptada = "i";
                    buscarPalabra = false;
                    break;
                case "o":
                    palabraEncriptada = "o";
                    buscarPalabra = false;
                    break;
                case "u":
                    palabraEncriptada = "u";
                    buscarPalabra = false;
                    break;
                default:
                    textoDesencriptado = textoDesencriptado+texto[i];
                    break;
            }

        } else{
            palabraEncriptada = palabraEncriptada+texto[i];
            switch (palabraEncriptada) {
                case "ai":
                    textoDesencriptado = textoDesencriptado+"a";
                    palabraEncriptada = ""
                    buscarPalabra = true;
                    break;

                case "enter":
                    textoDesencriptado = textoDesencriptado+"e";
                    palabraEncriptada = ""
                    buscarPalabra = true;
                    break;

                case "imes":
                    textoDesencriptado = textoDesencriptado+"i";
                    palabraEncriptada = ""
                    buscarPalabra = true;
                    break;

                case "ober":
                    textoDesencriptado = textoDesencriptado+"o";
                    palabraEncriptada = ""
                    buscarPalabra = true;
                    break;   

                case "ufat":
                    textoDesencriptado = textoDesencriptado+"u";
                    palabraEncriptada = ""
                    buscarPalabra = true;
                    break;

                default:
                    break;
            }
        }
    }

    
    if (textoDesencriptado == "") {
        textoDesencriptado = "No hay ningún mensaje escrito"
    }

    //Borra todos los hijos
    while (rectangulo.firstChild) {
        rectangunlo.removeChild(rectangulo.firstChild);
    }

    //Se setea el contenido del textarea y luego se añade como hijo
    textoEnRectangulo.textContent = textoDesencriptado;
    rectangulo.appendChild(textoEnRectangulo);
    rectangulo.appendChild(botonCopiar);

}

function copiar() {
    let text = document.getElementById("rectangulo-resultado-texto");
    text.select();
    text.setSelectionRange(0,99999);
    document.execCommand('copy');
    console.log("texto copiado")
}

botonCopiar.onclick = copiar;
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;