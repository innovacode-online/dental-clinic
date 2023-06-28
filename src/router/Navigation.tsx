import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { MainLayout } from '../layouts/MainLayout'
import { ClientsPage, DashboardPage, EmployeesPage, LoginPage, NewClientPage, NewEmployeePage, QuotePage, QuotesPage, RegisterPage } from '../pages'


export const Navigation: FC = () => {
    return (
        <Routes>

            {/* RUTAS DE LA AUTENTICACION */}
            <Route path='/auth/login' element={ <LoginPage/> } />
            <Route path='/auth/register' element={ <RegisterPage/> } />

            {/* RUTAS PROTEGIDAS */}
            <Route path='/' element={ <MainLayout/> }>
                <Route index element={ <DashboardPage/> }/>
                
                <Route path='clients' element={ <ClientsPage/> }/>
                <Route path='clients/new' element={ <NewClientPage/> }/>

                <Route path='employees' element={ <EmployeesPage/> }/>
                <Route path='employees/new' element={ <NewEmployeePage/> }/>
                
                <Route path='quotes' element={ <QuotesPage/> }/>
                <Route 
                    path='quotes/:id'
                    element={ <QuotePage/> }
                />

            </Route>
        </Routes>
    )
}
