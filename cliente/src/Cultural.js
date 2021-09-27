import React, {useState} from 'react'

import axios from 'axios'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export const Cultural = () => {

  const [documento, setDocumento] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  const [nombre_evento, setNombre_evento] = useState('')
  const [asistencia, setAsistencia] = useState('')
  const [numero_asistencia, setNumero_asitencia] =useState('')
  const [participacion, setParticipacion] = useState('')
  const [pago, setPago] = useState('')
  const [medio_pago, setMedio_pago] = useState('')
  const [duracion, setDuracion] = useState('')
  const [localidad, setLocalidad] = useState('')
  const [cantidad_pago, setCantidad_pago] = useState('')

  


    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestatipo', {nombre_evento, asistencia, numero_asistencia});
        console.log(res.data)
        setNombre('')
        setAsistencia('')
        setNumero_asitencia('')
        setParticipacion('')
        setPago('')
        setMedio_pago('')
        setDuracion('')
        setLocalidad('')
        setCantidad_pago('')
        


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
      
      //Onchange agregado para nombre_evento
      const onchangeNombre_evento = (e) => {
        setNombre_evento(e.currentTarget.value);
        console.log(nombre_evento)
      }
      //Onchange agregado para asistencia
      const onchangeAsistencia = (e) => {
        setAsistencia(e.currentTarget.value);
        console.log(asistencia)
      }
      //Onchange agregado para Numero_asistencia
      const onchangeNumero_asitencia = (e) => {
        setNumero_asitencia(e.currentTarget.value);
        console.log(numero_asistencia)
      }
      const onchangeParticipacion = (e) => {
        setParticipacion(e.currentTarget.value);
        console.log(participacion)
      }

      const onchangePago = (e) => {
        setPago(e.currentTarget.value);
        console.log(pago)
      }

      const onchangeMedio_pago = (e) => {
        setMedio_pago(e.currentTarget.value);
        console.log(medio_pago)
      }

      const onchangeDuracion = (e) => {
        setDuracion(e.currentTarget.value);
        console.log(duracion)
      }

      const onchangeLocalidad = (e) => {
        setLocalidad(e.currentTarget.value);
        console.log(localidad)
      }

      const onchangeCantidad_pago = (e) => {
        setCantidad_pago(e.currentTarget.value);
        console.log(cantidad_pago)
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

            <h3 className="auth__title">FORMULARIO CULTURAL</h3>
            
            <FormGroup>
                <Label for="CheckboxNombre_evento">¿Qué evento cultural te gusta más?</Label>
                <div>
                  <CustomInput type="radio" id="radioNombre_evento1" label="Concierto" value="futbol" checked={esSeleccionado(nombre_evento, "futbol")} onChange={onchangeNombre_evento} />
                  <CustomInput type="radio" id="radioNombre_evento2" label="Teatro" value="ciclismo" checked={esSeleccionado(nombre_evento, "ciclismo")} onChange={onchangeNombre_evento} />
                  <CustomInput type="radio" id="radioNombre_evento3" label="Peliculas" value="lucha libre" checked={esSeleccionado(nombre_evento, "lucha libre")} onChange={onchangeNombre_evento} />
                  <CustomInput type="radio" id="radioNombre_evento4" label="Danza" value="automovilismo" checked={esSeleccionado(nombre_evento, "automovilismo")} onChange={onchangeNombre_evento} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxAsistencia">¿Ha asistido o asiste a eventos de este tipo?</Label>
                <div>
                  <CustomInput type="radio" id="radioAsistencia1" label="Si" value={true} checked={esSeleccionado(asistencia, "true")} onChange={onchangeAsistencia} />
                  <CustomInput type="radio" id="radioAsistencia2" label="No" value={false} checked={esSeleccionado(asistencia, "false")} onChange={onchangeAsistencia} />
                  
                </div>
              </FormGroup>
              
              <FormGroup>
                <Label for="CheckboxNumero_asistencia">¿A cuantos eventos de este tipo has ido en el último año?</Label>
                <div>
                  <CustomInput type="radio" id="radioNumero_asistencia1" label="0 a 2 veces" value="0 a 2 veces" checked={esSeleccionado(numero_asistencia, "0 a 2 veces")} onChange={onchangeNumero_asitencia} />
                  <CustomInput type="radio" id="radioNumero_asistencia2" label="3 a 5 veces" value="3 a 5 veces" checked={esSeleccionado(numero_asistencia, "3 a 5 veces")} onChange={onchangeNumero_asitencia} />
                  <CustomInput type="radio" id="radioNumero_asistencia3" label="6 a mas veces" value="6 a mas veces" checked={esSeleccionado(numero_asistencia, "6 a mas veces")} onChange={onchangeNumero_asitencia} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxParticipacion">¿Le gustaría participar en este evento?</Label>
                <div>
                  <CustomInput type="radio" id="radioParticipacion1" label="Si" value={true} checked={esSeleccionado(participacion, "true")} onChange={onchangeParticipacion} />
                  <CustomInput type="radio" id="radioParticipacion2" label="No" value={false} checked={esSeleccionado(participacion, "false")} onChange={onchangeParticipacion} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxPago">¿Pagarías por asistir a este evento?</Label>
                <div>
                  <CustomInput type="radio" id="radioPago1" label="Si" value={true} checked={esSeleccionado(pago, "true")} onChange={onchangePago} />
                  <CustomInput type="radio" id="radioPago2" label="No" value={false} checked={esSeleccionado(pago, "false")} onChange={onchangePago} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxMedio_pago">¿Por cuál medio de pago te gustaría pagar el ticket?</Label>
                <div>
                  <CustomInput type="radio" id="radioMedio_pago1" label="Efectivo en punto de venta" value="efectivo" checked={esSeleccionado(medio_pago, "efectivo")} onChange={onchangeMedio_pago} />
                  <CustomInput type="radio" id="radioMedio_pago2" label="Online" value="online" checked={esSeleccionado(medio_pago, "online")} onChange={onchangeMedio_pago} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxDuracion">¿A cuantos eventos de deporte has ido en el último año?</Label>
                <div>
                  <CustomInput type="radio" id="radioDuracion1" label="1 a 2 horas" value="1 a 2 horas" checked={esSeleccionado(duracion, "1 a 2 horas")} onChange={onchangeDuracion} />
                  <CustomInput type="radio" id="radioDuracion2" label="3 a 4 horas" value="3 a 4 horas" checked={esSeleccionado(duracion, "3 a 4 horas")} onChange={onchangeDuracion} />
                  <CustomInput type="radio" id="radioDuracion3" label="5 o más horas" value="5 o más horas" checked={esSeleccionado(duracion, "5 o más horas")} onChange={onchangeDuracion} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxLocalidad">¿Te gustaría que este evento se lleve a cabo en tu localidad?</Label>
                <div>
                  <CustomInput type="radio" id="radioLocalidad1" label="Si" value={true} checked={esSeleccionado(pago, "true")} onChange={onchangeLocalidad} />
                  <CustomInput type="radio" id="radioLocalidad2" label="No" value={false} checked={esSeleccionado(pago, "false")} onChange={onchangeLocalidad} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxCantidad_pago">¿Cuánto estarías dispuesto a pagar por este evento?</Label>
                <div>
                  <CustomInput type="radio" id="radioCantidad_pago1" label="0 a 50k" value="0 a 50k" checked={esSeleccionado(cantidad_pago, "0 a 50k")} onChange={onchangeCantidad_pago} />
                  <CustomInput type="radio" id="radioCantidad_pago2" label="50k a 100k" value="50k a 100k" checked={esSeleccionado(cantidad_pago, "50k a 100k")} onChange={onchangeCantidad_pago} />
                  <CustomInput type="radio" id="radioCantidad_pago3" label="100k o más" value="100k o más" checked={esSeleccionado(cantidad_pago, "100k o más")} onChange={onchangeCantidad_pago} />
                </div>
              </FormGroup>

                
                
                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>inserta()}
                > 
                enviar info
                </button>

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
            
        </div>
    )
}