import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import {FormPrincipal} from '../Formdb';
import {FormCultural} from '../Formdb';
import {FormDeportes} from '../Formdb';
<<<<<<< HEAD
import {FormConcierto} from '../Formdb';
=======
import {FormFutbol} from '../Formdb';
import {FormCiclismo} from '../Formdb'
//import {FormLucha} from '../Formdb';
//import {FormAutomovilismo} from '../Formdb';
>>>>>>> 1458cb7e83754c0c7ac0812ed0601e3ab3daf609

function App(){
    return (
        <BrowserRouter>
            <Route path="/FormPrincipal" component={FormPrincipal} />
            <Route path="/FormCultural" component={FormCultural} />
            <Route path="/FormDeportes" component={FormDeportes} />
<<<<<<< HEAD
            <Route path="/FormConcierto" component={FormConcierto} />
=======
            <Route path="/FormFutbol" component={FormFutbol} />
            <Route path="/FormCiclismo" component={FormCiclismo} />
            
>>>>>>> 1458cb7e83754c0c7ac0812ed0601e3ab3daf609
        </BrowserRouter>
    )
}

export default App

//<Route path="/FormLucha" component={FormLucha}/>
//<Route path="/FormAutomovilismo" component={FormAutomovilismo} />