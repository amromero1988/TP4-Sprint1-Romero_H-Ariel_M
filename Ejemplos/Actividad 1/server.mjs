import express from 'express'; 

// Crear una instancia de Express 
const app = express(); 

// Configurar el puerto en el que el servidor escuchará 
const PORT = 3000; 
// Ruta básica 

//-------------------------------------------------------------------------


app.get('/user/:id', (req, res) =>{ 
    const userId = req.params.id;

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
                <h1>Bienvenido a mi API</h1>
                
                <p>Has accedido a la información del usuario con ID: <strong>${userId}</strong></p>
                
            </div>
        </body>
        </html>
        `); 
}); 


// Iniciar el servidor 
app.listen(PORT, () => { 
}); 
console.log(`Servidor corriendo en http://localhost:${PORT}`); 


