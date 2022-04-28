import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { InputBase } from '@mui/material'
import MySelect from '../MySelect/MySelect'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#20212c',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
}
const styleModalInput = {
  // '& .MuiInputBase-input': {
  borderRadius: 4,
  border: '2px solid #2e2e39',
  color: '#adadb4',
  padding: '10px 12px',
  marginBottom: '20px',
  // },
}
interface myModal {
  open: boolean
  handleOpen: any
  handleClose: any
}
const MyModal: FC<myModal> = ({ open, handleOpen, handleClose }) => {
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <InputBase placeholder='Enter name' fullWidth sx={styleModalInput} />
          <Box>
            <MySelect />
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
export default MyModal
