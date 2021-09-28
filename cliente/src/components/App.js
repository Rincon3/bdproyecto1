import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import {FormPrincipal} from '../Formdb';
import {FormCultural} from '../Formdb';
import {FormDeportes} from '../Formdb';
import {FormFutbol} from '../Formdb';

function App(){
    return (
        <BrowserRouter>
            <Route path="/FormPrincipal" component={FormPrincipal} />
            <Route path="/FormCultural" component={FormCultural} />
            <Route path="/FormDeportes" component={FormDeportes} />
            <Route path="/FormFutbol" component={FormFutbol} />
        </BrowserRouter>
    )
}

export default App