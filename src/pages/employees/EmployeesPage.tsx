import { FC } from 'react'

import { UsersTable } from '../../components'
import { Box, Typography } from '@mui/material'

export const EmployeesPage: FC = () => {
    return (
        <Box component='main'>
            <Typography variant='h1' mb={ 5 }>Gestiona tus empleados</Typography>

            <UsersTable/>
        </Box>
    )
}
