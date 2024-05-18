const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configuración para servir archivos estáticos en producción
if (process.env.NODE_ENV === 'production') {
  // Sirve archivos estáticos desde el directorio 'JavaScriptProjects-main/frontend/build'
  app.use(express.static(path.join(__dirname, 'JavaScriptProjects-main/frontend/build')));

  // Ruta específica para servir 'index.html' en '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'JavaScriptProjects-main/frontend/build', 'index.html'));
  });

  // Ruta comodín para servir 'index.html' en cualquier otra ruta
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'JavaScriptProjects-main/frontend/build', 'index.html'));
  });
}

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
