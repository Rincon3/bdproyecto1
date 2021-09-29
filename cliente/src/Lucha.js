import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { CustomInput, FormGroup, Label } from 'reactstrap';

export const Lucha = () => {


  const [tipo_deporte, setTipo_deporte] = useState('')
  
  const buttonTerminar = document.querySelector(".btnTerminar");
  const buttonEnviar = document.querySelector(".btnEnviar");


    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestaDeportes', {tipo_deporte});
        const res2 = await axios.post('/basedatos/insertarEncuestaLucha', {});
        console.log(res.data)
        console.log(res2.data)
        setTipo_deporte('')
    }

      //Onchange agregado para tipo_deporte
      const onchangeTipo_deporte = (e) => {
        setTipo_deporte(e.currentTarget.value);
        console.log(tipo_deporte)
      }
      

    const inserta = () => {
        console.log('Se hizo click');
         guardabase()
         buttonTerminar.disabled=false
         buttonEnviar.disabled=true
      }

    const termina = () => {
      alert('Terminó la encuesta')
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
            <h3 className="auth__title">LUCHA</h3>

              <FormGroup>
                <Label for="CheckboxTipo_deporte">¿De qué tipo de peleas te gustaría ir a un evento?</Label>
                <div>
                  <CustomInput type="radio" id="radioTipo_deporte1" label="Artes marciales mixtas" value="artes mixtas" checked={esSeleccionado(tipo_deporte, "artes mixtas")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte2" label="Boxeo" value="boxeo" checked={esSeleccionado(tipo_deporte, "boxeo")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte2" label="Karate" value="karate" checked={esSeleccionado(tipo_deporte, "karate")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte2" label="Lucha Libre" value="lucha libre" checked={esSeleccionado(tipo_deporte, "lucha libre")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte2" label="Taekwondo" value="taekwondo" checked={esSeleccionado(tipo_deporte, "taekwondo")} onChange={onchangeTipo_deporte} />
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
                type="button"
                onClick={()=>termina()}>Terminar encuesta
                
                </button>
                </Link>
        </div>
    )
}