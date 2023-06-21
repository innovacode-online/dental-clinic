import { FC } from 'react'

import { Avatar, Box, Button, Card, Grid, Typography } from '@mui/material'

export const QuoteCard: FC = () => {
    return (
        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
            <Card
                sx={{
                    padding:'1rem 2rem'
                }}
            >
                <Box sx={{ display:'flex', gap:'1rem', alignItems:'center', mb:2 }}>
                    <Avatar/>
                    <Typography>Nombre del cliente</Typography>
                </Box>

                <Typography>Fecha de la cita</Typography>
                <Typography variant='subtitle1' mb='1rem'>Nombre de la consulta</Typography>
                <Button
                    variant='outlined'
                >
                    Ver consulta
                </Button>
            </Card>
        </Grid>
    )
}
