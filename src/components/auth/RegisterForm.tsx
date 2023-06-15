
import { Box, Button, TextField } from '@mui/material'

export const RegisterForm = () => {
    return (
        <Box component='form' 
            sx={{ 
                display:'grid', 
                gap:'1rem', 
                boxShadow:'0px 3px 15px rgba(0,0,0,0.2)',
                padding:{ xs:'3rem 1rem', md:'3rem' },
                border:'1px solid rgba(0,0,0,0.3)',
                borderRadius:'1rem'
            }}>
            <TextField
                label='Ingresa tu nombre'
                type='text'
                placeholder='Juan Manuel'
            />
            <TextField
                label='Ingresa tus apellidos'
                type='text'
                placeholder='Perez Pereira'
            />
            <TextField
                label='Correo electronico'
                type='email'
                placeholder='correo@example.com'
            />
            <TextField
                label='Contraseña'
                type='password'
                placeholder='Ingresa tu contraseña'
            />

            <Button>Registrarse</Button>
        </Box>
    )
}
