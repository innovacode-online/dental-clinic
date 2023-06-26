import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from './themes';
import { UserProvider } from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider theme={ darkTheme }>
        <CssBaseline/>
        <App />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>,
)
