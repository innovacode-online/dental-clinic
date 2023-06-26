import { FC, useContext } from 'react'

import { UsersTable } from '../../components'
import { Box, CircularProgress, Typography } from '@mui/material'
import { UserContext } from '../../context'

export const EmployeesPage: FC = () => {

    const { patients, isLoading } = useContext(UserContext);


    return (
        <Box component='main'>
            <Typography variant='h1' mb={ 5 }>Gestiona tus empleados</Typography>
            {
                isLoading
                ? (
                    <CircularProgress/>
                )
                : (
                    <UsersTable users={ patients }/>
                )

            }
        </Box>
    )
}
