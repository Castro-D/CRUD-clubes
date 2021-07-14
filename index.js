const express = require('express');
const handlebars = require('express-handlebars');
const multer = require('multer');
const equipos = require('./data/equipos.json');

const upload = multer({ dest: './uploads' });
const app = express();
const PUERTO = 8080;

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDir: `${__dirname}/views/partials/`,
}));

app.use(express.static(`${__dirname}/uploads`));

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

app.get('/equipo/crear', (req, res) => {
  res.render('nuevo-equipo', {
    layout: 'index',
  });
});

app.post('/equipo/crear', upload.single('imagen'), (req, res) => {
  console.log(req.file);
  res.render('nuevo-equipo', {
    layout: 'index',
    data: {
      mensaje: 'Exito!',
      nombreArchivo: req.file.filename,
    },
  });
});

app.listen(PUERTO, () => {
  console.log(`Escuchando requests en https://localhost:${PUERTO}`);
});
