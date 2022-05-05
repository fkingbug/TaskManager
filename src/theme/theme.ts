import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: 'Arimo ,  sans-serif',
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // scrollbarColor: '#181920 #4a4c5e',
          scrollbarWidth: {
            width: '8px',
            borderRadius: '8px',
          },
          scrollbarBaseColor: {
            '&::-webkit-scrollbar': {
              width: '8px',
              borderRadius: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: ' #d4d4d4',
              boxShadow: '0 0 2px rgba(0, 0, 0, 0.2) inset',
              borderRadius: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#ee6e7a',
              borderRadius: '8px',
              border: '3px solid #ee6e7a',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#e66975',
            },
          },
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
