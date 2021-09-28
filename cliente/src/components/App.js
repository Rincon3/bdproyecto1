import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import {FormPrincipal} from '../Formdb';
import {FormCultural} from '../Formdb';
import {FormDeportes} from '../Formdb';
import {FormConcierto} from '../Formdb';
import {FormDanza} from '../Formdb';
import {FormPeliculas} from '../Formdb';
import {FormTeatro} from '../Formdb';
import {FormFutbol} from '../Formdb';
import {FormCiclismo} from '../Formdb'
import {FormLucha} from '../Formdb';
import {FormAutomovilismo} from '../Formdb';

function App(){
    return (
        <BrowserRouter>
            <Route path="/FormPrincipal" component={FormPrincipal} />
            <Route path="/FormCultural" component={FormCultural} />
            <Route path="/FormDeportes" component={FormDeportes} />
            <Route path="/FormConcierto" component={FormConcierto} />
            <Route path="/FormFutbol" component={FormFutbol} />
            <Route path="/FormCiclismo" component={FormCiclismo} />
            <Route path="/FormTeatro" component={FormTeatro} />
            <Route path="/FormPeliculas" component={FormPeliculas} />
            <Route path="/FormDanza" component={FormDanza} />

            <Route path="/FormLucha" component={FormLucha}/>
            <Route path="/FormAutomovilismo" component={FormAutomovilismo} />
            
        </BrowserRouter>
    )
}

export default App