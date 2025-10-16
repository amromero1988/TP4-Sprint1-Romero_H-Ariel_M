import express from 'express'; 

// Crear una instancia de Express 
const app = express(); 

// Configurar el puerto en el que el servidor escuchará 
const PORT = 3000; 
// Ruta básica 


app.get('/', (req, res) =>{ 
    res.send('¡Hola, mundo!'); 
}); 

//------------------------------

// Ruta GET con parámetro de consulta 
// Solicitud: http://localhost:3000/profile?edad=30 
app.get('/profile', (req, res) => {
    
    const edad = req.query.edad;
    res.send(`
        
        <h1>Perfil de Usuario</h1>
        <p>Edad: ${edad}</p>

    `);

console.log(`Edad recibida: ${edad}`);

}); 
 
  





//------------------------------



// Iniciar el servidor 
app.listen(PORT, () => { 
}); 
console.log(`Servidor corriendo en http://localhost:${PORT}`); 


