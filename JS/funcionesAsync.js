const clasesPersonaje = async () => {
    const response = await fetch("./JSON/clases.json");
    const data = await response.json();
    clasesDelPersonaje = data;
  
    selectClase = document.getElementById("clase").innerHTML = data.map(({ id, nombre }) => `<option value="${id}">${nombre}</option>`).join();
  };


const damagesPersonaje = async () => {
    const response = await fetch("./JSON/damages.json");
    const data = await response.json();
    damagesDelPersonaje = data;
  
    selectDamage = document.getElementById("damage").innerHTML = data.map(({ id, nombre }) => `<option value="${id}">${nombre}</option>`).join();
  };

const elementosPersonaje = async () => {
    const response = await fetch("./JSON/elementos.json");
    const data = await response.json();
    elementosDelPersonaje = data;
  
    selectDamage = document.getElementById("elemento").innerHTML = data.map(({ id, nombre }) => `<option value="${id}">${nombre}</option>`).join();
  };

const armasPersonaje = async () => {
    const response = await fetch("./JSON/armas.json");
    const data = await response.json();
    armasDelPersonaje = data;
  
    selectDamage = document.getElementById("arma").innerHTML = data.map(({ id, nombre }) => `<option value="${id}">${nombre}</option>`).join();
  };


  