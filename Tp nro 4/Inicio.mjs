

export function Inicio(req, res) {
    res.send(`
        
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Página de Inicio</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    max-width: 800px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #f4f4f4;
                }
                h1 {
                    color: #333;
                }
                .container {
                    background-color: white;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Trabajo Práctico 4</h1>
                <h2> Implementación de un Servidor con Express y Arquitectura MVC</h2> 

                <p>
                    En este trabajo práctico, implementaremos un servidor con Node.js y Express que seguirá la arquitectura
                    Modelo-Vista-Controlador (MVC). El servidor se ejecutará en el puerto 3005 y escuchará diversas
                    peticiones GET.
                </p>    

                    <h2>Requerimientos del Trabajo</h2>
                <p>
                    <ol>
                        <li>
                             Levantar un servidor Express en el puerto 3005.
                        </li>
                        <li>
                             El servidor debe escuchar varias rutas GET:
                        </li>
                        <strong>
                            <P>
                            ./superheroes/id/:id: Recibe un ID de superhéroe y devuelve los datos de ese superhéroe o un
                                mensaje si no fue encontrado.
                            </P>
                            <p>
                            /superheroes/atributo/:atributo/:valor: Recibe un atributo (por ejemplo, nombre o poder) y devuelve una lista de superhéroes que cumplen con ese criterio.
                            </p>
                            <p>
                                ./superheroes/edad/mayorA30: Devuelve una lista de superhéroes mayores de 30 años que
                                además sean del planeta Tierra y tengan al menos 2 poderes.
                            </p>
                        </strong>
                    </ol>

                </p>
                <h2>Rutas disponibles:</h2>
                <ul>
  <li>
    <p>
      Recibe un ID de superhéroe y devuelve los datos de ese superhéroe o un mensaje si no fue encontrado.
    </p>

    <h2>Seleccionar ID del Superhéroe</h2>
<select id="selectorId">
  <option value="">-- Selecciona un número --</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>
<button onclick="verId()">Ver ruta</button>

<script>
    function verId() {
    const idSeleccionado = document.getElementById('selectorId').value;
    if (idSeleccionado) {
        window.location.href = './superheroes/id/' + idSeleccionado;
    } else {
        alert('Por favor selecciona un ID.');
    }
}
</script>

<li>
    <p>
      Recibe un atributo (por ejemplo, nombre o poder) y devuelve una lista de superhéroes que cumplen con ese criterio.
    </p>

    <h2>Seleccionar Atributo del Superhéroe</h2>
<select id="selectorAtributo">
  <option value="">-- Selecciona un atributo --</option>
  <option value="id">id</option>
  <option value="nombreSuperHeroe">nombreSuperHeroe</option>
  <option value="nombreReal">nombreReal</option>
  <option value="nombreSociedad">nombreSociedad</option>
  <option value="edad">edad</option>
  <option value="planetaOrigen">planetaOrigen</option>
  <option value="debilidad">debilidad</option>
  <option value="poder">poder</option>
  <option value="habilidadEspecial">habilidadEspecial</option>
  <option value="aliado">aliado</option>
  <option value="enemigo">enemigo</option>
</select>
  </li>

  <input type="text" id="valor" placeholder="Escribe aquí...">
<button onclick="verAtributo()">Ver ruta</button>

<script>
function verAtributo() {
    const atributo = document.getElementById('selectorAtributo').value;
    const valor = document.getElementById('valor').value.trim();
    
    if (atributo && valor) {
        window.location.href = './superheroes/atributo/' + atributo + '/' + valor;
    } else {
        alert('Por favor selecciona un atributo e ingresa un valor.');
    }
                    }
</script>





<h2>Ver Superhéroes mayores de 30 años</h2>
    
  </li>

  <li>
    <p>
      Devuelve una lista de superhéroes mayores de 30 años que además sean del planeta Tierra y tengan al menos 2 poderes.
    </p>
    <button onclick="window.location.href='./superheroes/edad/mayorA30'">Ver ruta /edad</button>
  </li>
</ul>


            </div>
        </body>
        </html>


        
        
        `);
}