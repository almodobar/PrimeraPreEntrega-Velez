//clase
let claseDefinida = "";
let claseIngresada = false;


do {
    if (claseIngresada) {
        claseDefinida = claseDefinida + claseIngresada;
    }
    claseIngresada = prompt("Ingrese su clase: \n1.Paladin \n2.Mago \n3.Orco \n4.Fauno \n5.Para terminar escriba ESC"); 
} while (claseIngresada !== "ESC");


//daño
let dmgDefinido = "";
let dmgIngresado = false;

do {
    if (dmgIngresado) {
        dmgDefinido = dmgDefinido + dmgIngresado;
    }
    dmgIngresado = prompt("Ingrese su clase: \n1.Fisico \n2.Magico \n3.Elemental \n4.Para terminar escriba ESC"); 
} while (dmgIngresado !== "ESC");


//elemento
let elementoDefnidio = "";
let elementoIngresado = false;

do {
    if (elementoIngresado) {
        elementoDefnidio = elementoDefnidio + elementoIngresado
    }
    elementoIngresado = prompt("Ingrese su clase: \n1.Agua \n2.Tierra \n3.Fuego \n4.Aire \n5.Para terminar escriba ESC"); 
} while (elementoIngresado !== "ESC");

function crearPersonaje() {
    alert("Su personaje creado es un: " + claseDefinida + "\n" + "Su daño es: " + dmgDefinido + "\n" + "Utiliza el elemento: " + elementoDefnidio);
}

crearPersonaje();

