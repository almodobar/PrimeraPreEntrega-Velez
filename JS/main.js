
const formulario = document.getElementById("ingreso-personaje");
const mensajeError = document.getElementById("mensaje-error");
const tabla = document.getElementById("tabla");
const personajesLocalStorage = JSON.parse(localStorage.getItem("personajes")) || [];
const personajes = personajesLocalStorage.map((personaje) => {
  return new Personaje(personaje);
});

const borrarInputValueTabla = (e) => {
  for (const input of e.target) {
    input.value = "";
  };
};

const agregarFilaTabla = (personaje) => {
  const tr = document.createElement("tr")
  tr.innerHTML = `
  <td>${personaje.alias}</td>
  <td>${personaje.clase}</td>
  <td>${personaje.damage}</td>
  <td>${personaje.elemento}</td>
  <td>${personaje.arma}</td>
  <td>${personaje.edad}</td>
  `;

  const alias = personaje.alias;
  const botonAccion = document.createElement("botonAccion");
  botonAccion.innerHTML = `<button class="btn btn-warning mb-3">Eliminar</button>`;
  botonAccion.onclick = () => {
    const personajeEncontrado = personajes.find((element) => element.alias === alias);
    const indice = personajes.indexOf(personajeEncontrado);
    personajes.splice(indice, 1);
    localStorage.setItem("personajes", JSON.stringify(personajes));
    tr.remove();
  };

  tr.append(botonAccion);

  tabla.append(tr);
}

for (const personaje of personajes) {
  agregarFilaTabla(personaje);
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const personaje = new Personaje ({
    alias: e.target[0].value,
    clase: e.target[1].value,
    damage: e.target[2].value,
    elemento: e.target[3].value,
    arma: e.target[4].value,
    edad: e.target[5].value,
  });
    
  if (personaje.mayorDeEdad()) {
    borrarInputValueTabla(e);
    mensajeError.innerText = `Tu personaje debe tener mas de 14 años, tienes ${personaje.edad}`
    return;
  };

  personajes.push(personaje);
  localStorage.setItem("personajes", JSON.stringify(personajes));

  agregarFilaTabla(personaje);

  borrarInputValueTabla(e);

});


