import styled from '@emotion/styled'
import { Button, ButtonProps } from '@mui/material'
import React from 'react'

const ButtonModal = styled(Button)<ButtonProps>(({ theme }) => ({
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
    backgroundColor: '#1f1f26',
    border: '2px solid #212126',
  },
}))
export default ButtonModal
