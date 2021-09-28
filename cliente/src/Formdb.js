import React from 'react'
import {Cultural} from './Cultural'
import { Principal } from './Principal'
import { Deportes } from './Deportes'
import { Concierto } from './Concierto'

export const FormPrincipal = () => {
    return (
        <div className="formdb__main">
            <Principal/>
        </div>
    )
}

export const FormCultural = () => {
    return (
        <div className="formdb__main">
            <Cultural/>
        </div>
    )
}

export const FormDeportes = () => {
    return (
        <div className="formdb__main">
            <Deportes/>
        </div>
    )
}

export const FormConcierto = () => {
    return (
        <div className="formdb__main">
            <Concierto/>
        </div>
    )
}

