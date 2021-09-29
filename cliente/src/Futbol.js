import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { CustomInput, FormGroup, Label } from 'reactstrap';

export const Futbol = () => {

  const [tipo_deporte, setTipo_deporte] = useState('')
  const [equipo, setEquipo] = useState('')
  
  const buttonTerminar = document.querySelector(".btnTerminar");
  const buttonEnviar = document.querySelector(".btnEnviar");


    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestaDeportes', {tipo_deporte});
        const res2 = await axios.post('/basedatos/insertarEncuestaFutbol', {equipo});
        console.log(res.data)
        console.log(res2.data)
        setTipo_deporte('')
        setEquipo('')
    }

      //Onchange agregado para edad
      const onchangeTipo_deporte = (e) => {
        setTipo_deporte(e.currentTarget.value);
        console.log(tipo_deporte)
      }

      //Onchange agregado para eventos_donde
      const onchangeEquipo = (e) => {
        setEquipo(e.currentTarget.value);
        console.log(equipo)
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
            <h3 className="auth__title">FÚTBOL</h3>

              <FormGroup>
                <Label for="CheckboxTipo_deporte">¿Qué tipo de fútbol te gusta?</Label>
                <div>
                  <CustomInput type="radio" id="radioTipo_deporte1" label="Futbol tradicional" value="futbol tradicional" checked={esSeleccionado(tipo_deporte, "futbol tradicional")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte2" label="Fútbol sala" value="futbol sala" checked={esSeleccionado(tipo_deporte, "futbol sala")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte3" label="Fútbol playa" value="futbol playa" checked={esSeleccionado(tipo_deporte, "futbol playa")} onChange={onchangeTipo_deporte} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxEquipo">¿Cuál es tu equipo favorito?</Label>
                <div>
                  <CustomInput type="radio" id="radioEquipo1" label="Deportivo Cali" value="deportivo cali" checked={esSeleccionado(equipo, "deportivo cali")} onChange={onchangeEquipo} />
                  <CustomInput type="radio" id="radioEquipo2" label="América" value="america" checked={esSeleccionado(equipo, "america")} onChange={onchangeEquipo} />
                  <CustomInput type="radio" id="radioEquipo3" label="Cortuluá" value="cortulua" checked={esSeleccionado(equipo, "cortulua")} onChange={onchangeEquipo} />
                  <CustomInput type="radio" id="radioEquipo4" label="Nacional" value="nacional" checked={esSeleccionado(equipo, "nacional")} onChange={onchangeEquipo} />
                  <CustomInput type="radio" id="radioEquipo5" label="Millonarios" value="millonarios" checked={esSeleccionado(equipo, "millonarios")} onChange={onchangeEquipo} />
                  
                </div>
              </FormGroup>
 
                <button
                className="btnEnviar btn btn-primary" 
                type="button"
                onClick={()=>inserta()}>
                  enviar info
                </button>

                <Link to="">
                <button
                className="btnTerminar btn btn-primary" 
                disabled
                type="button">Terminar encuesta
                </button>
                </Link>
        </div>
    )
}
