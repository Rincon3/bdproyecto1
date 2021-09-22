const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//app.use(express.bodyParser());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const personas = [];

const mountRoutes = require('./routers');

mountRoutes(app);

app.get('/consultar', (req, res) => {
  res.send(s);
});

app.put('/guardar', (req, res) => {
  adicionarpersona(req.body);
  res.send('GUARDADO OK !!!');
});

app.delete('/borrar', (req, res) => {
  borrarpersona(req.body.id);
  res.send('BORRADO OK !!!');
});

app.post('/actualizadatos', (req, res) => {
  actualizarpersona(req.body);
  res.send('ACTUALIZADO OK !!!');
});

const adicionarpersona = (persona) => {
  personas.push(persona);
  return persona;
};

const borrarpersona = (id) => {
  const index = personas.findIndex((persona) => persona.id === id);

  if (index !== -1) {
    return pacientes.splice(index, 1)[0];
  }
};

const actualizarpersona = (newdatospersona) => {
  const index = personas.findIndex(
    (persona) => persona.id === newdatospersona.id
  );

  if (index !== -1) {
    return (personas[index] = newdatospersona);
  }
};

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('cliente/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'cliente', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));