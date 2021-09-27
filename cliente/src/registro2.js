import React, {useState} from 'react'

import axios from 'axios'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export const Registro2 = () => {

  const [documento, setDocumento] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  const [edad, setEdad] = useState('')
  const [eventos_donde, setEventos_donde] = useState('')



    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestaprincipal', {edad, eventos_donde });
        console.log(res.data)
        setEdad('')
        setEventos_donde('')

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
            <h3 className="auth__title">FORMULARIO PRINCIPAL</h3>
            <Form>

              <br />
              <p>CULTURA <b>{edad}</b></p>

              <FormGroup>
                <Label for="CheckboxEdad">¿Qué evento cultural te gusta más?</Label>
                <div>
                  <CustomInput type="radio" id="radioEdad1" label="Concierto" value="18 - 25" checked={esSeleccionado(edad, "18 - 25")} onChange={onchangeEdad} />
                  <CustomInput type="radio" id="radioEdad2" label="Teatro" value="26 - 35" checked={esSeleccionado(edad, "26 - 35")} onChange={onchangeEdad} />
                  <CustomInput type="radio" id="radioEdad3" label="Peliculas" value="36 - 45" checked={esSeleccionado(edad, "36 - 45")} onChange={onchangeEdad} />
                  <CustomInput type="radio" id="radioEdad4" label="Danzas" value="46 - más" checked={esSeleccionado(edad, "46 - más")} onChange={onchangeEdad} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxEventosdonde">¿Ha asistido o asiste a eventos de este tipo?</Label>
                <div>
                  <CustomInput type="radio" id="radioEventodonde1" label="Si" value="aire libre" checked={esSeleccionado(eventos_donde, "aire libre")} onChange={onchangeEventos_donde} />
                  <CustomInput type="radio" id="radioEventodonde2" label="No" value="sitio cerrado" checked={esSeleccionado(eventos_donde, "sitio cerrado")} onChange={onchangeEventos_donde} />
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
            </Form>
        </div>
    )
}
