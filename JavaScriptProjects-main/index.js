const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configuración para servir archivos estáticos en producción
if (process.env.NODE_ENV === 'production') {
  // Sirve archivos estáticos desde el directorio 'frontend/build'
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  // Ruta específica para servir 'index.html' en '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });

  // Ruta comodín para servir 'index.html' en cualquier otra ruta
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
}

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3000;

// if (process.env.NODE_ENV !== 'production') {
//   app.use(express.static(path.join(__dirname, 'frontend/public')));
  
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend/public', 'index.html'));
//   });
// } else {
//   app.use(express.static(path.join(__dirname, 'frontend/build')));
  
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
//   });

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
//   });
// }

// app.listen(port, () => {
//   console.log(`Servidor escuchando en http://localhost:${port}`);
// });
