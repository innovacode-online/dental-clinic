import { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context'

import { UsersTable } from '../../components'
import { Box, Button, CircularProgress, Typography } from '@mui/material'

export const EmployeesPage: FC = () => {

    const { employees, isLoading, deleteEmployee } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <Box component='main'>
            <Box mb={ 5 } display='flex' alignItems='center' justifyContent='space-between'>
                <Typography variant='h1'>Gestiona tus empleados</Typography>
                <Button onClick={() => navigate('/employees/new')} >Agregar empleado</Button>
            </Box>
            {
                isLoading
                ? (
                    <CircularProgress/>
                )
                : (
                    <UsersTable onDelete={ deleteEmployee } users={ employees }/>
                )

            }
        </Box>
    )
}
