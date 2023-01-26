class Personaje {
    constructor(clase, damage, elemento, habilidad) {
      this.clase = clase;
      this.damage = damage;
      this.elemento = elemento;
      this.habilidad = habilidad;
    } 
 };
  
  class PersonajeCreado {
    constructor() {
      this.personaje = [];
    };

    agregarPersonaje(clase, damage, elemento, habilidad) {
      const personajes = new Personaje(clase, damage, elemento, habilidad);
      this.personaje.push(personajes);
    }
  };
  
  const personajeCreado = new PersonajeCreado();
  
  let continuar = false;

  // CLASE
  let clase;
  let damage;
  let elemento;
  let habilidad;

  do {
    clase = prompt('"Ingrese su clase: \n1.Humano \n2.Dios \n3.Elfo \n4.Orco:');
    damage = prompt('Ingrese su clase: \n1.Fisico \n2.Magico \n3.Elemental \n4.Mascota:');
    elemento = prompt('Ingrese su clase: \n1.Agua \n2.Tierra \n3.Fuego \n4.Aire:');
    habilidad = prompt('Ingrese su clase: \n1.Arma ligera \n2.Arma pesada \n3.Magia \n4.Invocacion:');
  
    continuar = prompt('Quiere continuar ingresando valores? (y/N)') === 'y';
  
    personajeCreado.agregarPersonaje(clase, damage, elemento, habilidad);
  } while(continuar);

/*   // DAÑO
  let damage;
  do {
    damage = prompt('Ingrese su daño:');
  
    continuar = prompt('Quiere continuar ingresando valores? (y/N)') === 'y';
  
    personajeCreado.agregarPersonaje(damage);
  } while(continuar);

  //ELEMENTO
  let elemento;
  do {
    elemento = prompt('Ingrese su elemento:');
  
    continuar = prompt('Quiere continuar ingresando valores? (y/N)') === 'y';
  
    personajeCreado.agregarPersonaje(elemento);
  } while(continuar);
  
  //HABILIDAD
  let habilidad;
  do {
    habilidad = prompt('Ingrese su habilidad:');
  
    continuar = prompt('Quiere continuar ingresando valores? (y/N)') === 'y';
  
    personajeCreado.agregarPersonaje(habilidad);
  } while(continuar); */

  
  alert('El personaje creado es: ' + "\n" + JSON.stringify(personajeCreado));

  console.log(personajeCreado);
