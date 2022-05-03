import styled from '@emotion/styled'
import { Button, ButtonProps } from '@mui/material'

export const ButtonModal = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#adadb4',
  fontFamily: 'Arimo,sans-serif',
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: '1.5',
  backgroundColor: 'inherit',
  textTransform: 'none',
  border: '2px solid #2e2e39',
  borderRadius: ' 0.75em',
  padding: '10px 20px',
  height: '100%',
  '&:hover': {
    backgroundColor: '#1f1f26',
    border: '2px solid #212126',
  },
}))
export const styleSpisok = {
  position: 'absolute',
  fontSize: '0.875rem',
  boxSizing: 'border-box',
  padding: '25px',
  margin: '10px 0',
  minWidth: '210px',
  backgroundColor: ' #20212c',
  border: '2px solid #2e2e39',
  borderRadius: '0.75em',
  color: '#adadb4',
  overflow: 'auto',
  outline: ' 0px',
  left: ' -62px',
}
export const stylePicker = {
  position: 'relative',
}
export const colorStyle = {
  width: '30px',
  height: '30px',
  background: 'red',
  borderRadius: '0.75em',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.6,
  },
}
