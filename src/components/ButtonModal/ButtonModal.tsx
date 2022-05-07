import styled from '@emotion/styled'
import { Button, ButtonProps } from '@mui/material'

interface myModal extends ButtonProps {
  coloraaa: string
}

const ButtonModal = styled(Button)<myModal>(({ theme, coloraaa }) => ({
  color: '#adadb4',
  fontFamily: 'Arimo,sans-serif',
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '1.5',
  backgroundColor: 'inherit',
  textTransform: 'none',
  border: '2px solid #2e2e39',
  borderRadius: ' 0.75em',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: coloraaa,
    border: '2px solid #212126',
  },
}))
export default ButtonModal
