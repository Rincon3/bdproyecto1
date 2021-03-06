import React, {useState} from 'react'
 
import { Link } from 'react-router-dom';
import axios from 'axios'
import { CustomInput, FormGroup, Label } from 'reactstrap';
 
export const Cultural = () => {
 
  const [nombre_evento, setNombre_evento] = useState('')
  const [asistencia, setAsistencia] = useState('')
  const [numero_asistencia, setNumero_asitencia] =useState('')
  const [participacion, setParticipacion] = useState('')
  const [pago, setPago] = useState('')
  const [medio_pago, setMedio_pago] = useState('')
  const [duracion, setDuracion] = useState('')
  const [localidad, setLocalidad] = useState('')
  const [cantidad_pago, setCantidad_pago] = useState('')

  const buttonEnviar = document.querySelector(".btnEnviar");
  const buttonConcierto = document.querySelector(".btnConcierto");
  const buttonTeatro = document.querySelector(".btnTeatro");
  const buttonDanzas = document.querySelector(".btnDanzas");
  const buttonPeliculas = document.querySelector(".btnPeliculas");

    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestatipo', {nombre_evento, asistencia, numero_asistencia, 
          participacion, pago, medio_pago, duracion, localidad, cantidad_pago});
        console.log(res.data)
        setNombre_evento('')
        setAsistencia('')
        setNumero_asitencia('')
        setParticipacion('')
        setPago('')
        setMedio_pago('')
        setDuracion('')
        setLocalidad('')
        setCantidad_pago('')
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
         validacionEvento()
         buttonEnviar.disabled=true
      }     
 
      const esSeleccionado = (opcion, value) => {
        if(opcion===value){
          return true;
        }else{
          return false;
        }
      }

      const validacionEvento = () => {
        if(nombre_evento==='concierto'){
          buttonConcierto.disabled = false
          buttonTeatro.disabled = true
          buttonDanzas.disabled = true
          buttonPeliculas.disabled = true
        }else if(nombre_evento==='teatro'){
          buttonConcierto.disabled = true
          buttonTeatro.disabled = false
          buttonDanzas.disabled = true
          buttonPeliculas.disabled = true
        }else if(nombre_evento==='danza'){
          buttonConcierto.disabled = true
          buttonTeatro.disabled = true
          buttonDanzas.disabled = false
          buttonPeliculas.disabled = true
        }else{
          buttonConcierto.disabled = true
          buttonTeatro.disabled = true
          buttonDanzas.disabled = true
          buttonPeliculas.disabled = false
        }
      }
            
    return (
        <div  className="formdb__box-containter">
 
            <h3 className="auth__title">CULTURAL</h3>
            
            <FormGroup>
                <Label for="CheckboxNombre_evento">??Qu?? evento cultural te gusta m??s?</Label>
                <div>
                  <CustomInput type="radio" id="radioNombre_evento1" label="Concierto" value="concierto" checked={esSeleccionado(nombre_evento, "concierto")} onChange={onchangeNombre_evento} />
                  <CustomInput type="radio" id="radioNombre_evento2" label="Teatro" value="teatro" checked={esSeleccionado(nombre_evento, "teatro")} onChange={onchangeNombre_evento} />
                  <CustomInput type="radio" id="radioNombre_evento3" label="Peliculas" value="peliculas" checked={esSeleccionado(nombre_evento, "peliculas")} onChange={onchangeNombre_evento} />
                  <CustomInput type="radio" id="radioNombre_evento4" label="Danza" value="danza" checked={esSeleccionado(nombre_evento, "danza")} onChange={onchangeNombre_evento} />
                </div>
              </FormGroup>
 
              <FormGroup>
                <Label for="CheckboxAsistencia">??Ha asistido o asiste a eventos de este tipo?</Label>
                <div>
                  <CustomInput type="radio" id="radioAsistencia1" label="Si" value={true} checked={esSeleccionado(asistencia, "true")} onChange={onchangeAsistencia} />
                  <CustomInput type="radio" id="radioAsistencia2" label="No" value={false} checked={esSeleccionado(asistencia, "false")} onChange={onchangeAsistencia} />
                  
                </div>
              </FormGroup>
              
              <FormGroup>
                <Label for="CheckboxNumero_asistencia">??A cuantos eventos de este tipo has ido en el ??ltimo a??o?</Label>
                <div>
                  <CustomInput type="radio" id="radioNumero_asistencia1" label="0 a 2 veces" value="0 a 2 veces" checked={esSeleccionado(numero_asistencia, "0 a 2 veces")} onChange={onchangeNumero_asitencia} />
                  <CustomInput type="radio" id="radioNumero_asistencia2" label="3 a 5 veces" value="3 a 5 veces" checked={esSeleccionado(numero_asistencia, "3 a 5 veces")} onChange={onchangeNumero_asitencia} />
                  <CustomInput type="radio" id="radioNumero_asistencia3" label="6 a mas veces" value="6 a mas veces" checked={esSeleccionado(numero_asistencia, "6 a mas veces")} onChange={onchangeNumero_asitencia} />
                </div>
              </FormGroup>
 
              <FormGroup>
                <Label for="CheckboxParticipacion">??Le gustar??a participar en este evento?</Label>
                <div>
                  <CustomInput type="radio" id="radioParticipacion1" label="Si" value={true} checked={esSeleccionado(participacion, "true")} onChange={onchangeParticipacion} />
                  <CustomInput type="radio" id="radioParticipacion2" label="No" value={false} checked={esSeleccionado(participacion, "false")} onChange={onchangeParticipacion} />
                </div>
              </FormGroup>
 
              <FormGroup>
                <Label for="CheckboxPago">??Pagar??as por asistir a este evento?</Label>
                <div>
                  <CustomInput type="radio" id="radioPago1" label="Si" value={true} checked={esSeleccionado(pago, "true")} onChange={onchangePago} />
                  <CustomInput type="radio" id="radioPago2" label="No" value={false} checked={esSeleccionado(pago, "false")} onChange={onchangePago} />
                </div>
              </FormGroup>
 
              <FormGroup>
                <Label for="CheckboxMedio_pago">??Por cu??l medio de pago te gustar??a pagar el ticket?</Label>
                <div>
                  <CustomInput type="radio" id="radioMedio_pago1" label="Efectivo en punto de venta" value="efectivo" checked={esSeleccionado(medio_pago, "efectivo")} onChange={onchangeMedio_pago} />
                  <CustomInput type="radio" id="radioMedio_pago2" label="Online" value="online" checked={esSeleccionado(medio_pago, "online")} onChange={onchangeMedio_pago} />
                </div>
              </FormGroup>
 
              <FormGroup>
                <Label for="CheckboxDuracion">??A cuantos eventos de deporte has ido en el ??ltimo a??o?</Label>
                <div>
                  <CustomInput type="radio" id="radioDuracion1" label="1 a 2 horas" value="1 a 2 horas" checked={esSeleccionado(duracion, "1 a 2 horas")} onChange={onchangeDuracion} />
                  <CustomInput type="radio" id="radioDuracion2" label="3 a 4 horas" value="3 a 4 horas" checked={esSeleccionado(duracion, "3 a 4 horas")} onChange={onchangeDuracion} />
                  <CustomInput type="radio" id="radioDuracion3" label="5 o m??s horas" value="5 o m??s horas" checked={esSeleccionado(duracion, "5 o m??s horas")} onChange={onchangeDuracion} />
                </div>
              </FormGroup>
 
              <FormGroup>
                <Label for="CheckboxLocalidad">??Te gustar??a que este evento se lleve a cabo en tu localidad?</Label>
                <div>
                  <CustomInput type="radio" id="radioLocalidad1" label="Si" value={true} checked={esSeleccionado(localidad, "true")} onChange={onchangeLocalidad} />
                  <CustomInput type="radio" id="radioLocalidad2" label="No" value={false} checked={esSeleccionado(localidad, "false")} onChange={onchangeLocalidad} />
                </div>
              </FormGroup>
 
              <FormGroup>
                <Label for="CheckboxCantidad_pago">??Cu??nto estar??as dispuesto a pagar por este evento?</Label>
                <div>
                  <CustomInput type="radio" id="radioCantidad_pago1" label="0 a 50k" value="0 a 50k" checked={esSeleccionado(cantidad_pago, "0 a 50k")} onChange={onchangeCantidad_pago} />
                  <CustomInput type="radio" id="radioCantidad_pago2" label="50k a 100k" value="50k a 100k" checked={esSeleccionado(cantidad_pago, "50k a 100k")} onChange={onchangeCantidad_pago} />
                  <CustomInput type="radio" id="radioCantidad_pago3" label="100k o m??s" value="100k o m??s" checked={esSeleccionado(cantidad_pago, "100k o m??s")} onChange={onchangeCantidad_pago} />
                </div>
              </FormGroup>
 
                
                
                <button
                className="btnEnviar btn btn-primary" 
                type="button"
                onClick={()=>inserta()}
                > 
                enviar info
                </button>

                <Link to="/FormConcierto">
                <button
                className="btnConcierto btn btn-primary"
                disabled 
                type="button">
                  Secci??n Concierto
                </button>
                </Link>

                <Link to="/FormTeatro">
                <button
                className="btnTeatro btn btn-primary" 
                disabled
                type="button">
                  Secci??n Teatro
                </button>
                </Link>
                <Link to="/FormPeliculas">
                <button
                className="btnPeliculas btn btn-primary" 
                disabled
                type="button">
                  Secci??n Peliculas
                </button>
                </Link>
                <Link to="/FormDanza">
                <button
                className="btnDanzas btn btn-primary" 
                disabled
                type="button">
                  Secci??n Danza
                </button>
                </Link>
            
        </div>
    )
}
