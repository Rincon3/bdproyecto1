import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export const Registroinfo = () => {

  const [documento, setDocumento] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  const [edad, setEdad] = useState('')
  const [eventos_donde, setEventos_donde] = useState('')
  const [lugares_eventos, setLugares_eventos] = useState('')
  const [dia, setDia] = useState('')
  const [tipo, setTipo] = useState('')
  const [transporte, setTransporte] = useState('')
  const [promo, setPromo] = useState('')
  const [int_cultura, setInt_cultura] = useState('')
  const [int_deporte, setInt_deporte] = useState('')
  


    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestaprincipal', {edad, eventos_donde, lugares_eventos, dia, tipo, transporte, promo, int_cultura,int_deporte});
        console.log(res.data)
        setEdad('')
        setEventos_donde('')
        setLugares_eventos('')
        setDia('')
        setTipo('')
        setTransporte('')
        setPromo('')
        setInt_cultura('')
        setInt_deporte('')
      }
    
    const  consultabase = async () => {
        const res = await axios.get('/basedatos/consultatotalpacientes');
        console.log('data api',res.data)
        return res
      }

      const actualizabase = async () => {
        const res = await axios.put('/basedatos/actualizarpacientes', {numid: documento, nombre, apellido });
        console.log(res.data)
        setDocumento('')
        setNombre('')
        setApellido('')
      }

      const  eliminabase = async () => {
        const res = await axios.delete('/basedatos/eliminarpacientes', {data: {numid: documento}});
        console.log('data api',res.data)
        return res
      }
    
      const onChangedc = (e) => {
        setDocumento(e.currentTarget.value);
        console.log(documento)
      };
    
      const onChangenm = (e) => {
        setNombre(e.currentTarget.value);
        console.log(nombre)
      };  

      const onChangeap = (e) => {
        setApellido(e.currentTarget.value)
        
      }

      //Onchange agregado para edad
      const onchangeEdad = (e) => {
        setEdad(e.currentTarget.value);
        console.log(edad)
      }

      //Onchange agregado para eventos_donde
      const onchangeEventos_donde = (e) => {
        setEventos_donde(e.currentTarget.value);
        console.log(eventos_donde)
      }
      //Onchange agregado para lugares_eventos
      const onchangeLugares_eventos = (e) => {
        setLugares_eventos(e.currentTarget.value);
        console.log(lugares_eventos)
      }

      //Onchange agregado para dia
      const onchangeDia = (e) => {
        setDia(e.currentTarget.value);
        console.log(dia)
      }
      //Onchange agregado para tipo
      const onchangeTipo = (e) => {
        setTipo(e.currentTarget.value);
        console.log(tipo)
      }
      //Onchange agregado para trasnpote
      const onchangeTransporte =(e) =>{
        setTransporte(e.currentTarget.value);
        console.log(transporte)
      }
      //Onchange agregado para promo
      const onchangePromo = (e) => {
        setPromo(e.currentTarget.value);
        console.log(promo)
      }
      //Onchange agregado para int_cultura
      const onchangeInt_cultura = (e) => {
        setInt_cultura(e.currentTarget.value);
        console.log(int_cultura)
      }
      //Onchange agregado para int_deporte
      const onchangeInt_deporte = (e) =>{
        setInt_deporte(e.currentTarget.value);
        console.log(int_deporte)
      }

    const inserta = () => {
        console.log('Se hizo click');
         guardabase()
      }

    const consulta = () => {
        console.log('Se hizo click consulta');
        consultabase() 
    }

      const actualiza = () => {
        console.log('Se hizo click actualiza');
        actualizabase() 
      }

      const elimina = () => {
        console.log('Se hizo click elimina');
        eliminabase() 
      }      

      const esSeleccionado = (opcion, value) => {
        if(opcion===value){
          return true;
        }else{
          return false;
        }
      }
            
    return (
        <div  className="formdb__box-containter">
            <h3 className="auth__title">Envio INFO</h3>
            <Form>

              <br />
              <p>La edad seleccionada es: <b>{edad}</b></p>

              <FormGroup>
                <Label for="CheckboxEdad">¿En qué rango de edad se encuentra?</Label>
                <div>
                  <CustomInput type="radio" id="radioEdad1" label="18 - 25" value="18 - 25" checked={esSeleccionado(edad, "18 - 25")} onChange={onchangeEdad} />
                  <CustomInput type="radio" id="radioEdad2" label="26 - 35" value="26 - 35" checked={esSeleccionado(edad, "26 - 35")} onChange={onchangeEdad} />
                  <CustomInput type="radio" id="radioEdad3" label="36 - 45" value="36 - 45" checked={esSeleccionado(edad, "36 - 45")} onChange={onchangeEdad} />
                  <CustomInput type="radio" id="radioEdad4" label="46 - más" value="46 - más" checked={esSeleccionado(edad, "46 - más")} onChange={onchangeEdad} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxEventosdonde">¿Cómo te gustan que sean los eventos?</Label>
                <div>
                  <CustomInput type="radio" id="radioEventodonde1" label="Al aire libre" value="aire libre" checked={esSeleccionado(eventos_donde, "aire libre")} onChange={onchangeEventos_donde} />
                  <CustomInput type="radio" id="radioEventodonde2" label="En sitios cerrados" value="sitio cerrado" checked={esSeleccionado(eventos_donde, "sitio cerrado")} onChange={onchangeEventos_donde} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxLugareseventos">¿En qué días prefieres que se realicen los eventos?</Label>
                <div>
                  <CustomInput type="radio" id="radioLugareseventos1" label="estadios" value="estadios"checked={esSeleccionado(lugares_eventos, "estadios")} onChange={onchangeLugares_eventos}/>
                  <CustomInput type="radio" id="radioLugareseventos2" label="clubes" value="clubes"checked={esSeleccionado(lugares_eventos, "clubes")} onChange={onchangeLugares_eventos}/>
                  <CustomInput type="radio" id="radioLugareseventos3" label="centros comerciales" value="centros comerciales"checked={esSeleccionado(lugares_eventos, "centros comerciales")} onChange={onchangeLugares_eventos}/>
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="CheckboxDia">¿En qué días prefieres que se realicen los eventos?</Label>
                <div>
                  <CustomInput type="radio" id="radioDia1" label="Lunes" value="lunes"checked={esSeleccionado(dia, "lunes")} onChange={onchangeDia}/>
                  <CustomInput type="radio" id="radioDia2" label="martes" value="martes"checked={esSeleccionado(dia, "martes")} onChange={onchangeDia}/>
                  <CustomInput type="radio" id="radioDia3" label="miercoles" value="miercoles"checked={esSeleccionado(dia, "miercoles")} onChange={onchangeDia}/>
                  <CustomInput type="radio" id="radioDia4" label="jueves" value="jueves"checked={esSeleccionado(dia, "jueves")} onChange={onchangeDia}/>
                  <CustomInput type="radio" id="radioDia5" label="viernes" value="viernes"checked={esSeleccionado(dia, "viernes")} onChange={onchangeDia}/>
                  <CustomInput type="radio" id="radioDia6" label="sabado" value="sabado"checked={esSeleccionado(dia, "sabado")} onChange={onchangeDia}/>
                  <CustomInput type="radio" id="radioDia7" label="domingo" value="domingo"checked={esSeleccionado(dia, "domingo")} onChange={onchangeDia}/>
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="CheckboxTipo">¿Qué tipo de eventos te gusta?</Label>
                <div>
                  <CustomInput type="radio" id="radioTipo1" label="culturales" value="culturales"checked={esSeleccionado(tipo, "culturales")} onChange={onchangeTipo}/>
                  <CustomInput type="radio" id="radioTipo2" label="deportivos" value="deportivos"checked={esSeleccionado(tipo, "deportivos")} onChange={onchangeTipo}/>
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="CheckboxTransporte">¿Qué medio de transporte utilizas para llegar a eventos?</Label>
                <div>
                  <CustomInput type="radio" id="radioTransporte1" label="taxi" value="taxi"checked={esSeleccionado(transporte, "taxi")} onChange={onchangeTransporte}/>
                  <CustomInput type="radio" id="radioTransporte2" label="particular" value="particular"checked={esSeleccionado(transporte, "particular")} onChange={onchangeTransporte}/>
                  <CustomInput type="radio" id="radioTransporte3" label="servicios publicos" value="servicios publicos"checked={esSeleccionado(transporte, "servicios publicos")} onChange={onchangeTransporte}/>
                  <CustomInput type="radio" id="radioTransporte4" label="a pie" value="a pie"checked={esSeleccionado(transporte, "a pie")} onChange={onchangeTransporte}/>
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="CheckboxPromo">¿Por donde te gusta enterarte de los eventos?</Label>
                <div>
                  <CustomInput type="radio" id="radioPromo1" label="redes sociales" value="redes sociales"checked={esSeleccionado(promo, "redes sociales")} onChange={onchangePromo}/>
                  <CustomInput type="radio" id="radioPromo2" label="flyers" value="flyers"checked={esSeleccionado(promo, "flyers")} onChange={onchangePromo}/>
                  <CustomInput type="radio" id="radioPromo3" label="vallas publicitarias" value="vallas publicitarias"checked={esSeleccionado(promo, "vallas publicitarias")} onChange={onchangePromo}/>
                  <CustomInput type="radio" id="radioPromo4" label="radio" value="radio"checked={esSeleccionado(promo, "radio")} onChange={onchangePromo}/>
                  <CustomInput type="radio" id="radioPromo5" label="television" value="television"checked={esSeleccionado(promo, "television")} onChange={onchangePromo}/>
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="CheckboxInt_cultura">¿Te gustan los eventos culturales?</Label>
                <div>
                  <CustomInput type="radio" id="radioInt_cultura1" label="1" value="1"checked={esSeleccionado(int_cultura, "1")} onChange={onchangeInt_cultura}/>
                  <CustomInput type="radio" id="radioInt_cultura2" label="2" value="2"checked={esSeleccionado(int_cultura, "2")} onChange={onchangeInt_cultura}/>
                  <CustomInput type="radio" id="radioInt_cultura3" label="3" value="3"checked={esSeleccionado(int_cultura, "3")} onChange={onchangeInt_cultura}/>
                  <CustomInput type="radio" id="radioInt_cultura4" label="4" value="4"checked={esSeleccionado(int_cultura, "4")} onChange={onchangeInt_cultura}/>
                  <CustomInput type="radio" id="radioInt_cultura5" label="5" value="5"checked={esSeleccionado(int_cultura, "5")} onChange={onchangeInt_cultura}/>
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="CheckboxInt_deporte">¿Te gustan los eventos deportivos?</Label>
                <div>
                  <CustomInput type="radio" id="radioInt_deporte1" label="1" value="1"checked={esSeleccionado(int_deporte, "1")} onChange={onchangeInt_deporte}/>
                  <CustomInput type="radio" id="radioInt_deporte2" label="2" value="2"checked={esSeleccionado(int_deporte, "2")} onChange={onchangeInt_deporte}/>
                  <CustomInput type="radio" id="radioInt_deporte3" label="3" value="3"checked={esSeleccionado(int_deporte, "3")} onChange={onchangeInt_deporte}/>
                  <CustomInput type="radio" id="radioInt_deporte4" label="4" value="4"checked={esSeleccionado(int_deporte, "4")} onChange={onchangeInt_deporte}/>
                  <CustomInput type="radio" id="radioInt_deporte5" label="5" value="5"checked={esSeleccionado(int_deporte, "5")} onChange={onchangeInt_deporte}/>
                </div>
              </FormGroup>





              <input 
                className="auth__input"
                type="text"
                placeholder="documento"
                name="documento"
                value={documento}
                autoComplete="off"
                onChange={onChangedc}
              />
            

            <input 
                className="auth__input"
                type="text"
                placeholder="nombre"
                name="nombre"
                value={nombre}
                autoComplete="off"
                onChange={onChangenm}
                />
               <input 
                className="auth__input"
                type="text"
                placeholder="apellido"
                name="apellido"
                value={apellido}
                onChange={onChangeap}
                autoComplete="off"
                />

                
                <Link to="/Formdb2" > 
                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>inserta()}>
                  enviar info
                </button>
                </Link>

                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>consulta()}
                > 
                consultar
                </button>

                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>elimina()}
                > 
                eliminar
                </button>

                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>actualiza()}
                > 
                actualizar
                </button>
            </Form>
        </div>
    )
}
