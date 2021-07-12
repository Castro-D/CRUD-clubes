const express = require('express');
const handlebars = require('express-handlebars');
const equipos = require('./data/equipos.json');

const app = express();
const PUERTO = 8080;

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDir: `${__dirname}/views/partials/`,
}));

app.get('/', (req, res) => {
  res.render('main', {
    layout: 'index',
    equipos,
  });
});

app.get('/equipo/:id/ver', (req, res) => {
  res.render('Equipo', {
    layout: 'index',
    equipo: equipos[req.params.id],
  });
});



app.listen(PUERTO, () => {
  console.log(`Escuchando requests en https://localhost:${PUERTO}`);
});
