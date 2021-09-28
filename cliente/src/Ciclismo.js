import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { CustomInput, FormGroup, Label } from 'reactstrap';

export const Ciclismo = () => {

  const [documento, setDocumento] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  const [tipo_deporte, setTipo_deporte] = useState('')
  const [bicicleta, setBicicleta] = useState('')
  const [participar_ciclista, setParticipar_ciclista] = useState('')
  
  const buttonTerminar = document.querySelector(".btnTerminar");


    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarEncuestaDeportes', {tipo_deporte});
        const res2 = await axios.post('/basedatos/insertarEncuestaFutbol', {bicicleta, participar_ciclista});
        console.log(res.data)
        console.log(res2.data)
        setTipo_deporte('')
        setBicicleta('')
        setParticipar_ciclista('')
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

      //Onchange agregado para tipo_deporte
      const onchangeTipo_deporte = (e) => {
        setTipo_deporte(e.currentTarget.value);
        console.log(tipo_deporte)
      }

      //Onchange agregado para bicicleta
      const onchangeBicicleta = (e) => {
        setBicicleta(e.currentTarget.value);
        console.log(bicicleta)
      }

      //Onchange agregado para participar_bicicleta
      const onchangeParticipar_ciclista = (e) => {
        setParticipar_ciclista(e.currentTarget.value);
        console.log(participar_ciclista)
      }
      

    const inserta = () => {
        console.log('Se hizo click');
         guardabase()
         buttonTerminar.disabled=false
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
            <h3 className="auth__title">CICLISMO</h3>

              <FormGroup>
                <Label for="CheckboxTipo_deporte">¿Qué tipo de ciclismo te gusta?</Label>
                <div>
                  <CustomInput type="radio" id="radioTipo_deporte1" label="Ciclismo de ruta" value="ciclismo de ruta" checked={esSeleccionado(tipo_deporte, "ciclismo de ruta")} onChange={onchangeTipo_deporte} />
                  <CustomInput type="radio" id="radioTipo_deporte2" label="Ciclismo de pista" value="ciclismo de pista" checked={esSeleccionado(tipo_deporte, "ciclismo de pista")} onChange={onchangeTipo_deporte} />
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxParticipar_ciclista">¿Te gustaría participar como ciclista?</Label>
                <div>
                  <CustomInput type="radio" id="radioParticipa_ciclista1" label="Si" value={true} checked={esSeleccionado(participar_ciclista, "true")} onChange={onchangeParticipar_ciclista} />
                  <CustomInput type="radio" id="radioParticipa_ciclista2" label="No" value={false} checked={esSeleccionado(participar_ciclista, "false")} onChange={onchangeParticipar_ciclista} />                
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="CheckboxBicicleta">¿Tienes bicicleta propia?</Label>
                <div>
                  <CustomInput type="radio" id="radioBicicleta1" label="Si" value={true} checked={esSeleccionado(bicicleta, "true")} onChange={onchangeBicicleta} />
                  <CustomInput type="radio" id="radioBicicleta2" label="No" value={false} checked={esSeleccionado(bicicleta, "false")} onChange={onchangeBicicleta} />                
                </div>
              </FormGroup>
 
                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>inserta()}>
                  enviar info
                </button>

                <Link to="FormPrincipal">
                <button
                class="btnTerminar btn btn-primary" 
                disabled
                type="button">Terminar encuesta
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
