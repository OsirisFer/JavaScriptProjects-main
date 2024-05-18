const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/public')));
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/public', 'index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
