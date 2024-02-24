import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core'
import App from './App.tsx'
import './index.css'

const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
