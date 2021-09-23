import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import {Formdb} from '../Formdb';
import {Formdb2} from '../Formdb';

function App(){
    return (
        <BrowserRouter>
            <Route path="/Formdb" component={Formdb} />
            <Route path="/Formdb2" component={Formdb2} />
        </BrowserRouter>
    )
}

export default App