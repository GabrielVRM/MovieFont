import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme.js'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/globalStyles.js'

import { Routes } from './routes/index.jsx'
import { AuthProvider } from './hook/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
