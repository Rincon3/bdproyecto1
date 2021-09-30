import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export const Teatro = () => {

  const [genero, setGenero] = useState('')
  
  const buttonTerminar = document.querySelector(".btnTerminar");
  const buttonEnviar = document.querySelector(".btnEnviar");

    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestaCultural', {genero });
        const res2 = await axios.post('/basedatos/insertarEncuestaTeatro', {genero });
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
            <h3 className="auth__title">Teatro</h3>
            <Form>

              <FormGroup>
                <Label for="CheckboxGenero">¿Qué género de teatro es el que mas te gusta?</Label>
                <div>
                  <CustomInput type="radio" id="radioTeatro1" label="humor" value="humor" checked={esSeleccionado(genero, "humor")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioTeatro2" label="opera" value="opera" checked={esSeleccionado(genero, "opera")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioTeatro3" label="musical" value="musical" checked={esSeleccionado(genero, "musical")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioTeatro4" label="drama" value="drama" checked={esSeleccionado(genero, "drama")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioTeatro5" label="poetico" value="poetico" checked={esSeleccionado(genero, "poetico")} onChange={onChangeGenero} />
                </div>
              </FormGroup>
                
                <button
                className="btn btn-primary" 
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
