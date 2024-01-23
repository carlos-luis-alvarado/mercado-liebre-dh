const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
const path = require('path');
require('dotenv').config();
//MIDDLEWARES
app.use(express.static('public'))
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});
app.get('/iniciar-sesion', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login.html'))
});
app.get('/crear-cuenta', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/register.html'))
});
app.listen(PORT, () => {
  console.log(`Sevirdor escuchando en el puerto: ${PORT}`);
});