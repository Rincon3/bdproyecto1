import React, {useState} from 'react'

import axios from 'axios'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export const Peliculas = () => {

  const [genero, setGenero] = useState('')
  const [formato, setFormato] = useState('')
  const [autocine, setAutocine] = useState('')
  
  


    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestaCultural', {genero });
        const res2 = await axios.post('/basedatos/insertarEncuestaPeliculas', {formato, autocine});
        console.log(res.data)
        console.log(res2.data)
        setGenero('')
        setFormato('')
        setAutocine('')
      
        

      }
    
      
//onchange de genero
      const onChangeGenero = (e) => {
        setGenero(e.currentTarget.value);
        console.log(genero)
      };
      //onchange de formato
      const onchangeFormato = (e) => {
        setFormato(e.currentTarget.value);
        console.log(formato)
      };
      //onchange de autocine
      const onchangeAutocine = (e) => {
        setAutocine(e.currentTarget.value);
        console.log(autocine)
      };

      

    const inserta = () => {
        console.log('Se hizo click');
         guardabase()
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
            <h3 className="auth__title">Peliculas</h3>
            <Form>
              

              <FormGroup>
                <Label for="CheckboxGenero">¿Qué género de peliculas es la que mas te llama la atención?</Label>
                <div>
                  <CustomInput type="radio" id="radioPeliculas1" label="comedia" value="comedia" checked={esSeleccionado(genero, "comedia")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioGenero2" label="accion" value="accion" checked={esSeleccionado(genero, "accion")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioGenero3" label="aventura" value="aventura" checked={esSeleccionado(genero, "aventura")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioGenero4" label="terror" value="terror" checked={esSeleccionado(genero, "terror")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioGenero5" label="musicales" value="tecno" checked={esSeleccionado(genero, "tecno")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioGenero6" label="dramaticas" value="dramaticas" checked={esSeleccionado(genero, "dramaticas")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioGenero7" label="ciencia ficcion" value="ciencia ficcion" checked={esSeleccionado(genero, "ciencia ficcion")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioGenero8" label="fantasia" value="fantasia" checked={esSeleccionado(genero, "fantasia")} onChange={onChangeGenero} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxFormato">¿Qué formato de películas prefieres?</Label>
                <div>
                  <CustomInput type="radio" id="radioFormato1" label="2D" value="2D" checked={esSeleccionado(formato, "2D")} onChange={onchangeFormato} />
                  <CustomInput type="radio" id="radioFormato2" label="3D" value="3D" checked={esSeleccionado(formato, "3D")} onChange={onchangeFormato} />
                  
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="CheckboxAutocine">¿Has ido a un autocine?</Label>
                <div>
                  <CustomInput type="radio" id="radioAutocine1" label="Si" value="si" checked={esSeleccionado(autocine, "si")} onChange={onchangeAutocine} />
                  <CustomInput type="radio" id="radioAutocine2" label="No" value="no" checked={esSeleccionado(autocine, "no")} onChange={onchangeAutocine} />
                </div>
              </FormGroup>
                

                
                
                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>inserta()}
                > 
                enviar info
                </button>

            </Form>
        </div>
    )
}
