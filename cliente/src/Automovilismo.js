import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { CustomInput, FormGroup, Label } from 'reactstrap';

export const Automovilismo = () => {

  const [tipo_deporte, setTipo_deporte] = useState('')
  const [tipo_evento, setTipo_evento] = useState('')
  
  const buttonTerminar = document.querySelector(".btnTerminar");
  const buttonEnviar = document.querySelector(".btnEnviar");

    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestaDeportes', {tipo_deporte});
        const res2 = await axios.post('/basedatos/insertarEncuestaAutomovilismo', {tipo_evento});
        console.log(res.data)
        console.log(res2.data)
        setTipo_deporte('')
        setTipo_evento('')
    }

      //Onchange agregado para tipo_deporte
      const onchangeTipo_deporte = (e) => {
        setTipo_deporte(e.currentTarget.value);
        console.log(tipo_deporte)
      }

      //Onchange agregado para bicicleta
      const onchangeTipo_evento = (e) => {
        setTipo_evento(e.currentTarget.value);
        console.log(tipo_evento)
      }
      

    const inserta = () => {
        console.log('Se hizo click');
         guardabase()
         buttonTerminar.disabled=false
         buttonEnviar.disabled=true
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
            <h3 className="auth__title">AUTOMOVILISMO</h3>

              <FormGroup>
                <Label for="CheckboxTipo_deporte">¿Qué categoría del automovilismo es tu preferido ?</Label>
                <div>
                  <CustomInput type="radio" id="radioTipo_deporte1" label="Formula 1" value="formula 1" checked={esSeleccionado(tipo_deporte, "formula 1")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte2" label="Nascar" value="nascar" checked={esSeleccionado(tipo_deporte, "nascar")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte3" label="Karting" value="karting" checked={esSeleccionado(tipo_deporte, "karting")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte4" label="Formula e" value="formula e" checked={esSeleccionado(tipo_deporte, "formula e")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte5" label="Indycar" value="indycar" checked={esSeleccionado(tipo_deporte, "indycar")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte6" label="Drifting" value="drifting" checked={esSeleccionado(tipo_deporte, "drifting")} onChange={onchangeTipo_deporte} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxTipo_evento">¿A qué tipo de evento te gustaría asistir?</Label>
                <div>
                  <CustomInput type="radio" id="radioTipo_evento1" label="Car show" value="car show" checked={esSeleccionado(tipo_evento, "car show")} onChange={onchangeTipo_evento} />
                  <CustomInput type="radio" id="radioTipo_evento2" label="Carreras de cuarto de milla" value="cuarto milla" checked={esSeleccionado(tipo_evento, "cuarto milla")} onChange={onchangeTipo_evento} />
                  <CustomInput type="radio" id="radioTipo_evento3" label="Torneo de karting" value="torneo karting" checked={esSeleccionado(tipo_evento, "torneo karting")} onChange={onchangeTipo_evento} />
                  <CustomInput type="radio" id="radioTipo_evento4" label="Car meet" value="car meet" checked={esSeleccionado(tipo_evento, "car meet")} onChange={onchangeTipo_evento} />
                </div>
              </FormGroup>
 
                <button
                className="btnEnviar btn btn-primary" 
                type="button"
                onClick={()=>inserta()}>
                  enviar info
                </button>

                <Link to="FormPrincipal">
                <button
                class="btnTerminar btn btn-primary" 
                disabled
                type="button">Terminar encuesta
                </button>
                </Link>
        </div>
    )
}
