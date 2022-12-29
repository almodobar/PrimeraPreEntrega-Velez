
const nick = prompt("Ingrese un nick");

const clase = prompt("Su clase: Paladin, Mago, Orco, Fauno");
const paladin = "Paladin";
const wizard = "Mago";
const orco = "Orco";
const fauno = "Fauno";

const elemento = prompt("Su elemento: Agua, Fuego, Aire, Tierra");
const agua = "Agua";
const fuego = "Fuego";
const aire = "Aire";
const tierra = "Tierra"

const dmg = prompt("Su tipo de daño: Fisico, Magico, Elemental, Invocacion");
const fisico = "Fisico";
const magico = "Magico";
const element = "Elemental";
const summon = "Invocacion";

const caract = prompt("Su caracterista: Humano, Semidios, Dios, Zombi");
const humano = "Humano";
const semgod = "Semidios";
const dios = "Dios";
const zombi = "Zombi";

console.log(nick);
console.log(clase);
console.log(elemento);
console.log(dmg);
console.log(caract);

if ((clase === paladin || clase === wizard || clase === orco || clase === fauno) && (clase !== "")) {
    console.log("Clase valida");
} else { 
    alert("Clase no valida");
}

if ((elemento === agua || elemento === fuego || elemento === aire || elemento === tierra) && (elemento !== "")) {
    console.log("Elemento valido");
} else {
    alert("Elemento no valido");
}

if ((dmg === fisico || dmg === magico || dmg === element || dmg === summon) && (dmg !== "")) {
    console.log("Daño Valido");
} else {
    alert("Daño no valido");
}

if ((caract === humano || caract === semgod || caract === dios || caract === zombi) && (caract !== "")) {
    console.log("Caracteristica valida");
} else {
    alert("Caracteristica no valida");
}



alert("Su presonaje creado : " + " " + nick + "\nEs un " + clase + " " + caract + " con daño " + dmg + " de " + elemento);







