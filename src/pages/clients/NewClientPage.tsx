import { FC, useState, useContext, FormEvent } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { UserContext } from '../../context';

export const NewClientPage: FC = () => {
    const { createNewPatient } = useContext(UserContext);

    const [newPatient, setNewPatient] = useState({
        ci:0,
        nombre:'',
        apellidos:'',
        historial_clinico:''
    })

    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewPatient({...newPatient, [ e.target.name ] : e.target.value })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        createNewPatient( newPatient );
    }

    return (
        <Box>
            <Typography variant='h1' textAlign='center'>Agrega un nuevo paciente</Typography>
            <Box 
                component='form' 
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    maxWidth:'600px',
                    margin:'2rem auto',
                    rowGap:'1rem',
                    bgcolor:'secondary.main',
                    padding:'3rem 4rem',
                    borderRadius:'15px',
                
                }}
                onSubmit={handleSubmit}
            >
                <Typography variant='h2' mb={ 3 }>Formulario nuevo paciente</Typography>

                <TextField
                    type='number'
                    label='CI'
                    name='ci'
                    value={ newPatient.ci }
                    onChange={handleForm}
                />
                <TextField
                    type='text'
                    label='Nombre paciente'
                    name='nombre'
                    value={ newPatient.nombre }
                    onChange={handleForm}


                />
                <TextField
                    type='text'
                    label='Apellidos paciente'
                    name='apellidos'
                    value={ newPatient.apellidos }
                    onChange={handleForm}
                
                />
                <TextField
                    type='text'
                    multiline={ true }
                    rows={4}
                    label='Agrega el historial medico'
                    name='historial_clinico'
                    value={ newPatient.historial_clinico }
                    onChange={handleForm}
                
                />
                <Button type='submit'>Agregar Paciente</Button>
            </Box>
        </Box>
    )
}
