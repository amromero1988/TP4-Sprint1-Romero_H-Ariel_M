// ---------------------------------------------------------------------
// 🦸 Controlador
// El Controlador maneja las solicitudes HTTP y utiliza la capa de servicio para obtener los datos necesarios
// ---------------------------------------------------------------------

import { 
  obtenerSuperheroePorId, 
  buscarSuperheroesPorAtributo, 
  obtenerSuperheroesMayoresDe30 
} from '../services/superheroesService.mjs';

import { 
  renderizarSuperheroe, 
  renderizarListaSuperheroes 
} from '../views/responseView.mjs';

// ---------------------------------------------------------------------
// 📌 Obtener un superhéroe por ID
export function obtenerSuperheroePorIdController(req, res) { 
  const { id } = req.params; 
  const superheroe = obtenerSuperheroePorId(parseInt(id));

  if (superheroe) { 
    res.send(renderizarSuperheroe(superheroe)); 
  } else { 
    res.status(404).send({ mensaje: "Superhéroe no encontrado" }); 
  }
}

// ---------------------------------------------------------------------
// 🔍 Buscar superhéroes por atributo (ej: nombre, planeta, edad)
export function buscarSuperheroesPorAtributoController(req, res) { 
  const { atributo, valor } = req.params; 
  const superheroes = buscarSuperheroesPorAtributo(atributo, valor);

  if (superheroes && superheroes.length > 0) { 
    res.send(renderizarListaSuperheroes(superheroes)); 
  } else { 
    res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
  }
}

// ---------------------------------------------------------------------
// 🧓 Obtener superhéroes mayores de 30 años
export function obtenerSuperheroesMayoresDe30Controller(req, res) { 
  const superheroes = obtenerSuperheroesMayoresDe30(); 
  res.send(renderizarListaSuperheroes(superheroes));
}
