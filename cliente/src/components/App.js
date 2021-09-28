import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import {FormPrincipal} from '../Formdb';
import {FormCultural} from '../Formdb';
import {FormDeportes} from '../Formdb';
import {FormConcierto} from '../Formdb';

function App(){
    return (
        <BrowserRouter>
            <Route path="/FormPrincipal" component={FormPrincipal} />
            <Route path="/FormCultural" component={FormCultural} />
            <Route path="/FormDeportes" component={FormDeportes} />
            <Route path="/FormConcierto" component={FormConcierto} />
        </BrowserRouter>
    )
}

export default App