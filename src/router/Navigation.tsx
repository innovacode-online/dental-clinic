import { FC } from 'react'

import { Routes, Route } from 'react-router-dom'
import { DashboardPage, LoginPage, RegisterPage } from '../pages'


export const Navigation: FC = () => {
    return (
        <Routes>
            {/* RUTAS DE LA AUTENTICACION */}
            <Route path='/auth/login' element={ <LoginPage/> } />
            <Route path='/auth/register' element={ <RegisterPage/> } />

            {/* RUTAS PROTEGIDAS */}
            <Route path='/' element={ <DashboardPage/> }/>
        </Routes>
    )
}
