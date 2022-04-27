import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: 'Arimo ,  sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#17181f',
          // heigth: '100vh',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#20212c',
    },
  },
})
