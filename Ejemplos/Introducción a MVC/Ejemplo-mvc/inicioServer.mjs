

export function HolaMundo(req, res) {
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
                <h1>Ejemplo Postman Vista-Modelo-Controlador (MVC)</h1>
                
                <h2>Rutas disponibles:</h2>
                <ul>
                    <li><a href="/tareas">Obtener Todas las Tareas (GET)</a></li>
                    <li><a href="/tareas/completadas">Obtener Tareas Completadas (GET)</a></li>
                    <li><a href="/tareas/agregar">Agregar Tarea (POST)</a></li>
                    <li><a href="/tareas/1/completadas">Marcar como Completa (PUT)</a></li>
                    <li><a href="/tareas/1">Eliminar Tarea (DELETE)</a></li>
                    <li><a href="/">INICIO</a></li>
                </ul>

            </div>
        </body>
        </html>


        
        
        `);
}