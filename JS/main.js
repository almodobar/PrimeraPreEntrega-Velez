function personajePredefinido () {
    return alert("Su personaje creado es un: " + caractPersonaje["clase"] + "\n" + "Su daño es: " + caractPersonaje["dmg"] + "\n" + "Utiliza el/los elementos: " + caractPersonaje["elemento"] + "\n" + "Se especializa en el uso de: " + caractPersonaje["skill"]);           
}

// objeto
const caractPersonaje = {
    clase: "Semidios",
    dmg: "AOE",
    elemento: "Todos",
    skill: "Arma de largo alcanze"
}

// personaje predefinido
let numeroIngresado = " ";
let personajeCreado = prompt("Si quiere crear un personaje predefinido ingrese SI, de lo contrario escriba ESC")

do {
    if (personajeCreado == "SI") {
    personajePredefinido();
    } 
} while (personajeCreado != "ESC");


// clase
let claseDefinida = "";
let claseIngresada = false;

do {
    if (claseIngresada) {
        claseDefinida = claseDefinida + claseIngresada;
    }
    claseIngresada = prompt("Ingrese su clase: \n1.Humano \n2.Dios \n3.Elfo \n4.Orco \n5.Para terminar escriba ESC"); 
} while (claseIngresada != "ESC");


// daño
let dmgDefinido = "";
let dmgIngresado = false;

do {
    if (dmgIngresado) {
        dmgDefinido = dmgDefinido + dmgIngresado;
    }
    dmgIngresado = prompt("Ingrese su clase: \n1.Fisico \n2.Magico \n3.Elemental \n4.Mascota \n5.Para terminar escriba ESC"); 
} while (dmgIngresado !== "ESC");


// elemento
let elementoDefnidio = "";
let elementoIngresado = false;

do {
    if (elementoIngresado) {
        elementoDefnidio = elementoDefnidio + elementoIngresado
    }
    elementoIngresado = prompt("Ingrese su clase: \n1.Agua \n2.Tierra \n3.Fuego \n4.Aire \n5.Para terminar escriba ESC"); 
} while (elementoIngresado != "ESC");

// habilidad
let habilidadDefnidio = "";
let habilidadoIngresado = false;

do {
    if (habilidadoIngresado) {
        habilidadDefnidio = habilidadDefnidio + habilidadoIngresado
    }
    habilidadoIngresado = prompt("Ingrese su clase: \n1.Arma ligera \n2.Arma pesada \n3.Magia \n4.Invocacion \n5.Para terminar escriba ESC"); 
} while (habilidadoIngresado != "ESC");


function crearPersonaje() {
    alert("Su personaje creado es un: " + claseDefinida + "\n" + "Su daño es: " + dmgDefinido + "\n" + "Utiliza el/los elementos: " + elementoDefnidio + "\n" + "Se especializa en el uso de: " + habilidadDefnidio);
}

crearPersonaje();
