import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import { SideMenu } from '../components';

export const MainLayout: FC = () => {
    return (
        <Box
            sx={{
                display:'flex',
                height:'100vh',
                width:'100%',
                padding:'1.5rem',
                gap: '2rem'
            }}
        >
            {/* SIDEMENU */}
            <SideMenu/>

            {/* MAIN */}
            <Box component='main' width='100%'>
                <Outlet/>
            </Box>
        </Box>
    )
}
