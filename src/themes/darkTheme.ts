import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },

    palette: {
        mode: 'dark',
        background: {
            default: '#21233f'
        },
        primary: {
            main: '#404BDA',  
        },
        secondary: {
            main: '#282945',
            dark: '#21233f'
        },
        text:{
            primary: '#f3f3f3',
            secondary:'#f9f9fa'
        }
    },
    components: {
        MuiDrawer:{
            defaultProps: {
                variant: 'permanent',
                color: '#363853'
            },
            styleOverrides:{
                root:{
                    display:'block'
                }
            }
        },

        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 30,
                    fontWeight: 700
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 500
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600
                }
            }
        },


        MuiButton: {
            defaultProps: {
                variant: 'contained',
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 10,
                    padding:'.75rem'
                }
            }
        },

        MuiListItemButton:{
            styleOverrides:{
                root:{
                    gap: '1.5rem',
                    justifyContent:'start',
                    padding:0
                }
            }
        },

        MuiCard: {
            defaultProps: {
                elevation: 0,
            
            },
            styleOverrides: {
                root: {
                    background:'#282945',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
                    borderRadius: '10px',
                }
            }
        }

    }
});