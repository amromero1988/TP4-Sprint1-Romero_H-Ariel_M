
import express from 'express'; 

// Crear una instancia de Express 
const app = express(); 

// Configurar el puerto en el que el servidor escuchará 
const PORT = 3000; 

//--------------------------------------------------------------------

// Ruta GET para el home 
// Solicitud: http://localhost:3000/
app.get('/', (req, res) => { 
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
                <p>Esta es la página de inicio</p>
                <h2>Rutas disponibles:</h2>
                <ul>
                    <li><a href="/user/123">/user/:id</a> - Perfil de usuario</li>
                    <li><a href="/product/electronics/456">/product/:category/:id</a> - Productos</li>
                </ul>
            </div>
        </body>
        </html>
        
        
        `); 
     
});

//---------------------------------------------------------------

// Ruta GET con parámetro de ruta 
// Solicitud: http://localhost:3000/user/123 
app.get('/user/:id', (req, res) => { 

const userId =  req.params.id; 
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
                <h1>Perfil del usuario con ID: ${userId}</h1>
                
                <h2>Rutas disponibles:</h2>
                <ul>
                    <li><a href="/"</a>INICIO</li>
                    <li><a href="/product/electronics/456">/product/:category/:id</a> - Productos</li>
                </ul>
            </div>
        </body>
        </html>

    
    `);

}); 

 
// Ruta GET con múltiples parámetros 
// Solicitud: http://localhost:3000/product/electronics/456 
app.get('/product/:category/:id', (req, res) => {
    
    const {category, id }= req.params;
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
                <h1>Categoría: ${category}, ID del producto: ${id}</h1>
                
                <h2>Rutas disponibles:</h2>
                <ul>
                    <li><a href="/user/123">/user/:id</a> - Perfil de usuario</li>
                    <li><a href="/">INICIO</li>
                </ul>
            </div>
        </body>
        </html>



        
        `); 
    }); 
  
//-------------------------------------------------------------------------
    // Iniciar el servidor 
app.listen(PORT, () => { 
}); 
console.log(`Servidor corriendo en http://localhost:${PORT}`); 
