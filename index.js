const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;


app.get('/', (req, res)=>{
  res.send(`Hola desde mi server en express en el puerto ${port}`);
});

app.get('/nueva-ruta', (req, res)=>{
  res.send(`Hola desde la nueva ruta`);
});


routerApi(app);

app.listen(port, ()=>{
  console.log(`Hola desde consola de express en el puerto ${port}`);
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(`${time}`)
});
