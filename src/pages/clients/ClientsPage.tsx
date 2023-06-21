import { FC } from 'react'

import { Box, Typography } from '@mui/material'
import { UsersTable } from '../../components'

export const ClientsPage: FC = () => {
    return (
        <Box component='main'>
            <Typography variant='h1' mb={ 5 }>Gestiona tus clientes</Typography>

            <UsersTable/>
        </Box>
    )
}
