import { LoginForm } from '../../components'

import { Box, Typography } from '@mui/material'

export const LoginPage = () => {
    return (
        <Box    
            component='main'
            sx={{
                padding:'2rem 0',
                width: { xs: '90%', md:'50%', lg:'40%' },
                margin:'auto',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItem:'center'
            }}
        >   
            <Typography textAlign='center' variant='h1'>Inicia Sesion</Typography>
            <Typography textAlign='center' mb={ 4 }>Comienza a gestionar tu clinica dental</Typography>

            {/* FORMUALRIO */}
            <LoginForm/>
        </Box>
    )
}
