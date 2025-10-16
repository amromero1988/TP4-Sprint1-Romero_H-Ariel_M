
import express from 'express'; 

// Crear una instancia de Express 
const app = express(); 

// Configurar el puerto en el que el servidor escuchará 
const PORT = 3000; 

//--------------------------------------------------------------------

// Ruta GET para el home 
// Solicitud: http://localhost:3000/
app.get('/', (req, res) => { 
    res.send('Página de inicio'); 
     res.send('usuario'); 
});

//---------------------------------------------------------------

// Ruta GET con parámetro de ruta 
// Solicitud: http://localhost:3000/user/123 
app.get('/user/:id', (req, res) => { 

const userId =  req.params.id; 
res.send(`Perfil del usuario con ID: ${userId}`);

}); 

 
// Ruta GET con múltiples parámetros 
// Solicitud: http://localhost:3000/product/electronics/456 
app.get('/product/:category/:id', (req, res) => {
    
    const {category, id }= req.params;
    res.send(`Categoría: ${category}, ID del producto: ${id}`); 
    }); 
  
//-------------------------------------------------------------------------
    // Iniciar el servidor 
app.listen(PORT, () => { 
}); 
console.log(`Servidor corriendo en http://localhost:${PORT}`); 
