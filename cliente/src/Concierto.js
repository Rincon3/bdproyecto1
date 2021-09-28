import React, {useState} from 'react'

import axios from 'axios'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export const Concierto = () => {

  const [genero, setGenero] = useState('')
  const [artista, setArtista] = useState('')
  
  
  


    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestaCultural', {genero });
        const res2 = await axios.post('/basedatos/insertarEncuestaConcirto', {artista });
        console.log(res.data)
        setGenero('')
        setArtista('')
      
        

      }
    
      
//onchange de genero
      const onChangeGenero = (e) => {
        setGenero(e.currentTarget.value);
        console.log(genero)
      };
      //onchange de artista
      const onChangeArtista = (e) => {
        setArtista(e.currentTarget.value);
        console.log(artista)
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
            <h3 className="auth__title">Concierto</h3>
            <Form>
              

              <FormGroup>
                <Label for="CheckboxGenero">¿Qué género musical escuchas?</Label>
                <div>
                  <CustomInput type="radio" id="radioGenero1" label="rap" value="rap" checked={esSeleccionado(genero, "rap")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioGenero2" label="rock" value="rock" checked={esSeleccionado(genero, "rock")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioGenero3" label="jazz" value="jazz" checked={esSeleccionado(genero, "jazz")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioGenero4" label="baladas" value="baladas" checked={esSeleccionado(genero, "baladas")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioGenero5" label="tecno" value="tecno" checked={esSeleccionado(genero, "tecno")} onChange={onChangeGenero} />
                  <CustomInput type="radio" id="radioGenero6" label="reggaeton" value="reggaeton" checked={esSeleccionado(genero, "reggaeton")} onChange={onChangeGenero} />
                  
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxArtista">Normalmente asistes a escuchar</Label>
                <div>
                  <CustomInput type="radio" id="radioArtista1" label="grupos de musica" value="grupos de musica" checked={esSeleccionado(artista, "grupos de musica")} onChange={onChangeArtista} />
                  <CustomInput type="radio" id="radioArtista2" label="solistas" value="solistas" checked={esSeleccionado(artista, "solistas")} onChange={onChangeArtista} />
                  <CustomInput type="radio" id="radioArtista3" label="orquestas" value="orquestas" checked={esSeleccionado(artista, "orquestas")} onChange={onChangeArtista} />
                  <CustomInput type="radio" id="radioArtista4" label="batallas de rap" value="batallas de rap" checked={esSeleccionado(artista, "batallas de rap")} onChange={onChangeArtista} />
                  
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
