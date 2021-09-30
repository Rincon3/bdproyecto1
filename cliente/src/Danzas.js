import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export const Danza = () => {

  const [genero, setGenero] = useState('')
  
  const buttonTerminar = document.querySelector(".btnTerminar");
  const buttonEnviar = document.querySelector(".btnEnviar");

    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestaCultural', {genero });
        const res2 = await axios.post('/basedatos/insertarEncuestaDanza', {});
        console.log(res.data)
        console.log(res2.data)
        setGenero('')
      }
      
        //onchange de genero
      const onChangeGenero = (e) => {
        setGenero(e.currentTarget.value);
        console.log(genero)
      };

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
            <h3 className="auth__title">Danza</h3>
            <Form>
              
              <FormGroup>
                <Label for="CheckboxGenero">¿Qué tipo de danza?</Label>
                <div>
                  <CustomInput type="radio" id="radioDanza1" label="danza urbana" value="danza urbana" checked={esSeleccionado(genero, "danza urbana")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioDanza2" label="danza folclorica" value="danza folclorica" checked={esSeleccionado(genero, "danza folclorica")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioDanza3" label="danza contemporanea" value="danza contemporanea" checked={esSeleccionado(genero, "danza contemporanea")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioDanza4" label="danza arabe" value="danza arabe" checked={esSeleccionado(genero, "danza arabe")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioDanza5" label="salsa" value="salsa" checked={esSeleccionado(genero, "salsa")} onChange={onChangeGenero} />              
                  
                </div>
              </FormGroup>
                
                <button
                className="btnEnviar btn btn-primary" 
                type="button"
                onClick={()=>inserta()}
                > 
                enviar info
                </button>

                <Link to="">
                <button
                className="btnTerminar btn btn-primary" 
                disabled
                type="button">Terminar encuesta
                </button>
                </Link>

            </Form>
        </div>
    )
}
