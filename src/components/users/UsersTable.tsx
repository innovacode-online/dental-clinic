import { FC } from 'react';

import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { MdModeEditOutline, MdOutlineDeleteOutline } from 'react-icons/md'
import { Employee, Patient } from '../../interfaces'


interface Props{
    users: Patient[] | Employee[];
    onDelete: (id: number) => void;
}

export const UsersTable: FC<Props> = ({ users, onDelete }) => {

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
                            <TableCell>CI</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellidos</TableCell>
                            <TableCell>Fecha de creación</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.map((user, index) => (
                                <TableRow
                                    key={ index }
                                    sx={{
                                        'td, th': {
                                            border: 0,
                                            padding:'1.5rem 1'
                                        }
                                    }}
                                >
                                    <TableCell>{ user.ci }</TableCell>
                                    <TableCell>{ user.nombre }</TableCell>
                                    <TableCell>{ user.apellidos }</TableCell>
                                    <TableCell>{ user.created_at }</TableCell>
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
                                                onClick={() => onDelete( user.id )}
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
