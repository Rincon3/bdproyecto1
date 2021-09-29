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
            <Route exact path="/" component={FormPrincipal} />
            <Route exact path="/FormCultural" component={FormCultural} />
            <Route exact path="/FormDeportes" component={FormDeportes} />
            <Route exact path="/FormConcierto" component={FormConcierto} />
            <Route exact path="/FormFutbol" component={FormFutbol} />
            <Route exact path="/FormCiclismo" component={FormCiclismo} />
            <Route exact path="/FormTeatro" component={FormTeatro} />
            <Route exact path="/FormPeliculas" component={FormPeliculas} />
            <Route exact path="/FormDanza" component={FormDanza} />
            <Route exact path="/FormLucha" component={FormLucha}/>
            <Route exact path="/FormAutomovilismo" component={FormAutomovilismo} />
            
        </BrowserRouter>
    )
}

export default App