
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

const agregarFilaTabla = ({ alias, clase, damage, elemento, arma, edad}) => {
  const tr = document.createElement("tr")
  tr.innerHTML = `
  <td>${alias}</td>
  <td>${clase}</td>
  <td>${damage}</td>
  <td>${elemento}</td>
  <td>${arma}</td>
  <td>${edad}</td>
  `;

  const botonAccion = document.createElement("botonAccion");
  botonAccion.innerHTML = `<button class="btn btn-warning mb-3">Eliminar</button>`;
  botonAccion.onclick = () => {
    Swal.fire({
      title: `Seguro que quiere eliminar el personaje ${alias}?`,
      text: `No podras volver atras una vez realizado el cambio!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Si, borrar personaje!`,
      cancelButtonText: `Cancelar!`
    }).then((respuesta) => {
      if (respuesta.isConfirmed) {
        const personajeEncontrado = personajes.find((element) => element.alias === alias);
        const indice = personajes.indexOf(personajeEncontrado);
        personajes.splice(indice, 1);
        localStorage.setItem("personajes", JSON.stringify(personajes));
        tr.remove();
      }
    });
  };

  tr.append(botonAccion);

  tabla.append(tr);
}

for (const personaje of personajes) {
  agregarFilaTabla(personaje);
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const [aliasIngreso, claseIngreso, damageIngreso, elementoIngreso, armaIngreso, edadIngreso] = e.target;
  const personaje = new Personaje ({
    alias: aliasIngreso.value,
    clase: claseIngreso.value,
    damage: damageIngreso.value,
    elemento: elementoIngreso.value,
    arma: armaIngreso.value,
    edad: edadIngreso.value,
  });
    
  if (personaje.mayorDeEdad()) {
    borrarInputValueTabla(e);
    mensajeError.innerText = `Tu personaje debe tener mas de 14 años, tienes ${personaje.edad}`;
    return;
  };

  personajes.push(personaje);
  localStorage.setItem("personajes", JSON.stringify(personajes));

  agregarFilaTabla(personaje);

  borrarInputValueTabla(e);

  Toastify({
    text: "Su personaje se agrego correctamente",
    duration: 2000,
    backgroundColor: `linear-gradient(90deg, rgba(101,98,149,1) 2%, rgba(96,96,210,1) 49%, rgba(27,162,190,1) 99%)`,
    offset: {
      x: 20, 
      y: 90
    },
    }).showToast();
});


