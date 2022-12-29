/* const nick = prompt("Ingrese un nick"); */


//clases
let claseIngresada;
const clasePaladin = "Paladin";
const claseWizard = "Mago"
const claseOrco = "Orco";
const claseFauno = "Fauno";

do {
    claseIngresada = prompt("Eliga su clase: Paladin, Mago, Orco, Fauno")
    if (claseIngresada === clasePaladin || claseIngresada === claseWizard || claseIngresada === claseOrco || claseIngresada === claseFauno){
        alert("Clase valida")
    }else {
        alert("Clase no valida, ingrese nuevamente su clase: Paladin, Hechicero, Orco, Fauno");
    }
} while (claseIngresada !== clasePaladin || claseIngresada !== claseWizard || claseIngresada !== claseOrco || claseIngresada !== claseFauno);


switch (claseIngresada) {
    case clasePaladin:
        console.log("Clase valida")
        break;
    case claseWizard:
        console.log("Clase valida")
        break
    case claseOrco:
        console.log("Clase valida")
        break
    case claseFauno:
        console.log("Clase valida")
        break        
    default:
        alert("Clase no valida, ingrese nuevamente su clase: Paladin, Hechicero, Orco, Fauno");
        break
}  

//elementos
/*let elementoIngresado;
const elementAgua = "Agua";
const elementFuego = "Fuego";
const elementAire = "Aire";
const elementTierra = "Tierra"

do {
    elementoIngresado = prompt("Eliga su elemento: Agua, Fuego, Aire, Tierra")
    if (elementoIngresado === elementAgua || elementoIngresado === elementFuego || elementoIngresado === elementAire || elementoIngresado === elementTierra){
        alert("Clase valida")
    }else {
        alert("Clase no valida, ingrese nuevamente su clase: Paladin, Hechicero, Orco, Fauno");
    }
} while (elementoIngresado !== elementAgua || elementoIngresado !== elementFuego || elementoIngresado !== elementAire || elementoIngresado !== elementTierra);

switch (elementoIngresado) {
    case elementAgua:
        console.log("Elemento valido")
        break;
    case elementFuego:
        console.log("Elemento valido")
        break
    case elementAire:
        console.log("Elemento valido")
        break
    case elementTierra:
        console.log("Elemento valido")
        break        
    default:
        alert("Elemento no valido, ingrese nuevamente su elemento: Agua, Fuego, Aire, Tierra");
        break
}*/








/*const validarClasePaladin = (clasePaladin, claseWizard, claseOrco, claseFauno, claseIngresada) => {
    if (claseIngresada === clasePaladin) {
        console.log("Clase valida");
    }
    if (claseIngresada === claseWizard) {
        console.log("Clase valida");
    } 
    if (claseIngresada === claseOrco) {
        console.log("Clase valida");
    }
    if (claseIngresada === claseFauno) {
        console.log("Clase valida");
    } else {
        alert("Clase no valida, ingrese nuevamente su clase: Paladin, Mago, Orco, Fauno");
    }
} 


do {
    claseIngresada = prompt("Eliga su clase: Paladin, Mago, Orco, Fauno");
    validarClasePaladin(claseIngresada, clasePaladin, claseWizard, claseOrco, claseFauno);
    claseInvalida = claseIngresada !== clasePaladin;
} while (claseIngresada !== claseInvalida); */



/*const validarClaseIngresada = (clase, claseIngresada) => {
    if ((clase === paladin || clase === wizard || clase === orco || clase === fauno) && (clase !== "")) {
        console.log("Clase valida");
    } else { 
        alert("Clase no valida, ingrese nuevamente su clase: Paladin, Hechicero, Orco, Fauno");
    }
}


do {
    clase = prompt("Eliga su clase: Paladin, Hechicero, Orco, Fauno");
    claseIngresada(paladin, claseIngresada);
} while (claseIngresada !== paladin );*/


/*switch (clase) {
    case "Paladin":
        break
    case "Hechicero":
        break
    case "Orco":
        break
    case "Fauno":
        break 
    default:
        prompt("Su clase no es valida, ingrese una nuevamente")           
}*/



/*if ((clase === paladin || clase === wizard || clase === orco || clase === fauno) && (clase !== "")) {
    console.log("Clase valida");
} else { 
    alert("Clase no valida");
}

alert("Su presonaje creado : " + " " + nick + "\nEs un " + clase);*/



/*const clasePaladin = "Paladin";
const claseWizard = "Mago";
const claseOrco = "Orco";
const claseFauno = "Fauno";
let claseIngresada;

const validarClase = (claseIngresada, clasePaladin) => {
    return claseIngresada === clasePaladin;
}

do {
    claseIngresada = prompt("Eliga su clase: Paladin, Mago, Orco, Fauno")
    if (validarClase(claseIngresada === clasePaladin)){
        alert("Clase valida")
    }else {
        alert("Clase no valida, intente de nuevo")
    }
} while (claseIngresada !== clasePaladin);*/

