import { FC, useContext } from 'react';
import { UserContext } from '../../context';

import { UsersTable } from '../../components'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export const ClientsPage: FC = () => {

    const { patients, isLoading } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <Box component='main'>
            <Box mb={ 5 } display='flex' alignItems='center' justifyContent='space-between'>
                <Typography variant='h1' mb={ 5 }>Gestiona tus clientes</Typography>
                <Button onClick={() => navigate('/clients/new')} >Agregar paciente</Button>
            </Box>

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
