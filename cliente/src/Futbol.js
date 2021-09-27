import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { CustomInput, FormGroup, Label } from 'reactstrap';

export const Principal = () => {

  const [documento, setDocumento] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  const [tipo_deporte, setTipo_deporte] = useState('')
  const [equipo, setEquipo] = useState('')
  


    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestaDeporte', {tipo_deporte});
        const res2 = await axios.post('/basedatos/insertarEncuestaFutbol', {equipo});
        console.log(res.data)
        console.log(res2.data)
        setTipo_deporte('')
        setEquipo('')
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
         validacionTipo()
         guardabase()
      }

    const consulta = () => {
        console.log('Se hizo click consulta');
        consultabase()
        validacionTipo()
        
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
                  <CustomInput type="radio" id="radioTipo_deporte1" label="Futbol tradicional" value="futbol tradicional" checked={esSeleccionado(tipo_deporte, "futbol tradicional")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte2" label="Fútbol sala" value="futbol sala" checked={esSeleccionado(tipo_deporte, "futbol sala")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte3" label="Fútbol playa" value="futbol playa" checked={esSeleccionado(tipo_deporte, "futbol playa")} onChange={onchangeTipo_deporte} />
                </div>
              </FormGroup>
 
                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>inserta()}>
                  enviar info
                </button>

                <Link to="FormCultural">
                <button
                class="btnCultura btn btn-primary" 
                disabled
                type="button">
                  Siguiente sección Cultura
                </button>
                </Link>

                <Link to="/FormDeportes" >
                <button
                class="btnDeporte btn btn-primary" 
                disabled
                type="button">
                  Siguiente sección Deporte
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
        </div>
    )
}
