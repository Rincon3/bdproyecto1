const { Client } = require('pg');
const Router = require('express-promise-router');
var keys = require('../confi/keys')


const client = new Client({
  connectionString: keys.postgresurl,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;

router.get('/consultaPromedioIntereses', async (req, res) => {
  //const { id } = req.params
  const { rows } = await client.query('SELECT promedio_deporte, promedio_cultura FROM promedio ORDER BY id_usuario DESC LIMIT 1');
  res.send(rows);
});

router.post('/insertarEncuestaprincipal', async (req, res) => {
  const { edad, eventos_donde, lugares_eventos, dia, tipo, transporte, promo, int_cultura, int_deporte} = req.body;
  await client.query(
    `INSERT INTO principal(edad, eventos_donde, lugares_eventos, dia, tipo, transporte, promo, int_cultura, int_deporte) VALUES('${edad}','${eventos_donde}', '${lugares_eventos}','${dia}','${tipo}','${transporte}','${promo}','${int_cultura}','${int_deporte}' )`
  );
  res.send('INSERTADO');
});

router.post('/insertarEncuestatipo', async (req, res) => {
  const { nombre_evento, asistencia, numero_asistencia, participacion, pago, medio_pago,
  duracion, localidad, cantidad_pago} = req.body;
  await client.query(
    `INSERT INTO tipo(id_usuario, 
      nombre_evento, 
      asistencia, 
      numero_asistencia, 
      participacion,
      pago,
      medio_pago,
      duracion,
      localidad, 
      cantidad_pago)
        VALUES ((SELECT max(id_usuario) FROM principal),
     '${nombre_evento}',
     '${asistencia}',
     '${numero_asistencia}',
     '${participacion}',
     '${pago}',
     '${medio_pago}',
     '${duracion}',
     '${localidad}',
     '${cantidad_pago}')`
  );
  res.send('INSERTADO');
});

router.post('/insertarEncuestaDeportes', async (req, res) => {
  const { tipo_deporte} = req.body;
  await client.query(
    `INSERT INTO deporte(id_usuario, tipo_deporte) VALUES((SELECT max(id_usuario) FROM principal),'${tipo_deporte}')`
  );
  res.send('INSERTADO');
});

router.post('/insertarEncuestaFutbol', async (req, res) => {
  const { equipo } = req.body;
  await client.query(
    `INSERT INTO futbol(id_usuario, equipo) VALUES((SELECT max(id_usuario) FROM principal), '${equipo}')`
  );
  res.send('INSERTADO');
});

router.post('/insertarEncuestaCultural', async (req, res) => {
  const { genero} = req.body;
  await client.query(
    `INSERT INTO cultural(id_usuario, genero) VALUES((SELECT max(id_usuario) FROM principal),'${genero}')`
    );
    res.send('INSERTADO');
  });
      
router.post('/insertarEncuestaCiclismo', async (req, res) => {
  const { bicicleta, participar_ciclista } = req.body;
  await client.query(
    `INSERT INTO ciclismo(id_usuario, bicicleta, participar_ciclista) VALUES((SELECT max(id_usuario) FROM principal), '${bicicleta}', '${participar_ciclista}')`
  );
  res.send('INSERTADO');
});

router.post('/insertarEncuestaConcirto', async (req, res) => {
  const { artista } = req.body;
  await client.query(
    `INSERT INTO concierto(id_usuario, artista) VALUES((SELECT max(id_usuario) FROM principal),  '${artista}')`
    );
    res.send('INSERTADO');
  });
router.post('/insertarEncuestaLucha', async (req, res) => {
  const {} = req.body;
  await client.query(
    `INSERT INTO lucha(id_usuario) VALUES((SELECT max(id_usuario) FROM principal))`
  );
  res.send('INSERTADO');
});

router.post('/insertarEncuestaAutomovilismo', async (req, res) => {
  const { tipo_evento } = req.body;
  await client.query(
    `INSERT INTO automovilismo(id_usuario, tipo_evento) VALUES((SELECT max(id_usuario) FROM principal), '${tipo_evento}')`
  );
  res.send('INSERTADO');
});

router.post('/insertarEncuestaTeatro', async (req, res) => {
  const { artista } = req.body;
  await client.query(
    `INSERT INTO teatro(id_usuario) VALUES((SELECT max(id_usuario) FROM principal))`
    );
    res.send('INSERTADO');
  });
  router.post('/insertarEncuestaPeliculas', async (req, res) => {
    const { formato , autocine} = req.body;
    await client.query(
      `INSERT INTO pelicula(id_usuario, formato, autocine) VALUES((SELECT max(id_usuario) FROM principal),  '${formato}', '${autocine}')`
      );
      res.send('INSERTADO');
    });

    router.post('/insertarEncuestaDanza', async (req, res) => {
      const { } = req.body;
      await client.query(
        `INSERT INTO danza(id_usuario) VALUES((SELECT max(id_usuario) FROM principal))`
        );
        res.send('INSERTADO');
      });

      
