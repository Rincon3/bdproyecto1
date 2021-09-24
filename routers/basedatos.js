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

router.get('/consultatotalpacientes', async (req, res) => {
  //const { id } = req.params
  const { rows } = await client.query('SELECT * FROM pacientes');
  res.send(rows);
});

router.post('/insertarEncuestaprincipal', async (req, res) => {
  const { edad, eventos_donde, lugares_eventos, dia, tipo, transporte, promo, int_cultura, int_deporte} = req.body;
  await client.query(
    `INSERT INTO principal(edad, eventos_donde, lugares_eventos, dia, tipo, transporte, promo, int_cultura, int_deporte) VALUES('${edad}','${eventos_donde}', '${lugares_eventos}','${dia}','${tipo}','${transporte}','${promo}','${int_cultura}','${int_deporte}' )`
  );
  res.send('INSERTADO');
});

router.delete('/eliminarpacientes', async (req, res) => {
  const { numid } = req.body;
  await client.query(
  `DELETE FROM pacientes WHERE numid='${numid}'`);
  res.send('ELIMINADO');
});

router.put('/actualizarpacientes', async (req, res) => {
  const {nombre, apellido, numid}= req.body;
  await client.query(
    `UPDATE pacientes SET nombre='${nombre}' WHERE numid='${numid}'`
  );
  res.send('ACTUALIZADO');
});