import React, {useState} from 'react'

import axios from 'axios'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export const Registro2 = () => {

  const [documento, setDocumento] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  const [nombre_evento, setNombre_evento] = useState('')
  const [asistencia, setAsistencia] = useState('')
  const [numero_asistencia, setNumero_asitencia] =useState('')
  


    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestatipo', {nombre_evento, asistencia, numero_asistencia});
        console.log(res.data)
        setNombre('')
        setAsistencia('')
        setNumero_asitencia('')

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
            <h3 className="auth__title">CULTURAL</h3>
            <Form>

              <br />
              

              <FormGroup>
                <Label for="CheckboxNombre_evento">¿Qué evento cultural te gusta más?</Label>
                <div>
                  <CustomInput type="radio" id="radioNombre_evento1" label="concierto" value="concierto" checked={esSeleccionado(nombre_evento, "concierto")} onChange={onchangeNombre_evento} />
                  <CustomInput type="radio" id="radioNombre_evento2" label="teatro" value="teatro" checked={esSeleccionado(nombre_evento, "teatro")} onChange={onchangeNombre_evento} />
                  <CustomInput type="radio" id="radioNombre_evento3" label="peliculas" value="peliculas" checked={esSeleccionado(nombre_evento, "peliculas")} onChange={onchangeNombre_evento} />
                  <CustomInput type="radio" id="radioNombre_evento4" label="danza" value="danza" checked={esSeleccionado(nombre_evento, "danza")} onChange={onchangeNombre_evento} />
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
