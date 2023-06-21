import { FC } from 'react'

import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { MdModeEditOutline, MdOutlineDeleteOutline } from 'react-icons/md'


export const UsersTable: FC = () => {
    return (
        <>
            <TableContainer
                sx={{
                    backgroundColor:'secondary.main',
                    padding:'1rem 2rem',
                    borderRadius:'1.5rem'
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre completo</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            [1,2,3,4,4,5,6,6,7,3,8].map((user, index) => (
                                <TableRow
                                    sx={{
                                        'td, th': {
                                            border: 0,
                                            padding:'1.5rem 1'
                                        }
                                    }}
                                >
                                    <TableCell>Mattias Alexandre Duarte Aparicio</TableCell>
                                    <TableCell>maduarte@innovacode.online</TableCell>
                                    <TableCell>+591 66622444</TableCell>
                                    <TableCell>
                                        <Box 
                                            sx={{ 
                                                display:'flex',
                                                alignItems:'center',
                                                justifyContent:'center'
                                            }}
                                        >   
                                            <IconButton 
                                                sx={{ fontSize:'1.25rem', color:'primary.main' }}
                                            >
                                                <MdModeEditOutline/>
                                            </IconButton>

                                            <IconButton 
                                                sx={{ fontSize:'1.25rem', color:'error.main' }}
                                            >
                                                <MdOutlineDeleteOutline/>
                                            </IconButton>

                                        </Box>
                                    </TableCell>
                                </TableRow>                            
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
