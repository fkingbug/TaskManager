import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { InputBase } from '@mui/material'
import MySelect from '../MySelect/MySelect'
import { style, styleModalInput } from './MyModal.style'
import { MyModalProp } from '../../features/MyModalProp'
import ThirdSelectCustom from '../ThirdSelectCustom/ThirdSelectCustom'

const MyModal: FC<MyModalProp> = ({ open, handleOpen, handleClose }) => {
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
          <Box sx={{ display: 'flex' }}>
            <ThirdSelectCustom />
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
export default MyModal
