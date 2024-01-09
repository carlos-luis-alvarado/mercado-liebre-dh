const express = require('express');
const app = express();
const PORT = 3030;
const path = require('path');
//MIDDLEWARES
app.use(express.static('public'))
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});
app.listen(PORT, () => {
  console.log(`Sevirdor escuchando en el puerto: ${PORT}`);
});