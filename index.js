const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send(`Hola desde mi server en express en el puerto ${port}`);
});

app.listen(port, ()=>{
  console.log(`Hola desde consola de express en el puerto ${port}`);
});
