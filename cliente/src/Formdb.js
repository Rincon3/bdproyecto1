import React from 'react'
import { Cultural } from './Cultural'
import { Principal } from './Principal'
import { Deportes } from './Deportes'
import { Futbol } from './Futbol'
import { Ciclismo } from './Ciclismo'
//import { Lucha } from './Lucha'
//import { Automovilismo} from './Automovilismo'

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

export const FormFutbol = () => {
    return (
        <div className="formdb__main">
            <Futbol/>
        </div>
    )
}

export const FormCiclismo = () => {
    return (
        <div className="formdb__main">
            <Ciclismo/>
        </div>
    )
}

/*
export const FormLucha = () => {
    return (
        <div className="formdb__main">
            <Lucha/>
        </div>
    )
}

export const FormAutomovilismo = () => {
    return (
        <div className="formdb__main">
            <Automovilismo/>
        </div>
    )
}
*/