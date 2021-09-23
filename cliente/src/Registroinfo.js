import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export const Registroinfo = () => {

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
            <h3 className="auth__title">Envio INFO</h3>
            <Form>

              <br />
              <p>La edad seleccionada es: <b>{edad}</b></p>

              <FormGroup>
                <Label for="CheckboxEdad">¿En qué rango de edad se encuentra?</Label>
                <div>
                  <CustomInput type="radio" id="radioEdad1" label="18 - 25" value="18 - 25" checked={esSeleccionado(edad, "18 - 25")} onChange={onchangeEdad} />
                  <CustomInput type="radio" id="radioEdad2" label="26 - 35" value="26 - 35" checked={esSeleccionado(edad, "26 - 35")} onChange={onchangeEdad} />
                  <CustomInput type="radio" id="radioEdad3" label="36 - 45" value="36 - 45" checked={esSeleccionado(edad, "36 - 45")} onChange={onchangeEdad} />
                  <CustomInput type="radio" id="radioEdad4" label="46 - más" value="46 - más" checked={esSeleccionado(edad, "46 - más")} onChange={onchangeEdad} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxEventosdonde">¿Cómo te gustan que sean los eventos?</Label>
                <div>
                  <CustomInput type="radio" id="radioEventodonde1" label="Al aire libre" value="aire libre" checked={esSeleccionado(eventos_donde, "aire libre")} onChange={onchangeEventos_donde} />
                  <CustomInput type="radio" id="radioEventodonde2" label="En sitios cerrados" value="sitio cerrado" checked={esSeleccionado(eventos_donde, "sitio cerrado")} onChange={onchangeEventos_donde} />
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

                
                <Link to="/Formdb2" > 
                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>inserta()}>
                  enviar info
                </button>
                </Link>

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
