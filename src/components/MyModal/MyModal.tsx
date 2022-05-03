import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Button, InputBase } from '@mui/material'
import MySelect from '../MySelect/MySelect'
import { style, styleModalInput } from './MyModal.style'
import { MyModalProp } from '../../features/MyModalProp'
import ThirdSelectCustom from '../ThirdSelectCustom/ThirdSelectCustom'
import ColorPicker from '../ColorPicker/ColorPicker'
import ButtonModal from '../ButtonModal/ButtonModal'

const MyModal: FC<MyModalProp> = ({ open, handleOpen, handleClose }) => {
  const [color, setcolor] = useState('#ff3232')

  const btnColor = {
    '&:hover': {
      backgroundColor: color,
      border: '2px solid #212126',
    },
  }
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ThirdSelectCustom color={color} />
            <ColorPicker setcolor={setcolor} />
            <ButtonModal>Create</ButtonModal>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
export default MyModal
