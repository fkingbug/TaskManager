import React, { FC, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { ButtonModal, stylePicker, styleSpisok, colorStyle } from './ColorPicker.style'
import { newArray } from './ColorPicker.routes'

export interface ColorPickerProp {
  setcolor: (newColor: string) => void
}
const ColorPicker: FC<ColorPickerProp> = ({ setcolor }) => {
  const [active, setActive] = useState(false)

  const handleColorSwitch = () => {
    setActive(!active)
  }
  const handleColorChange = (newColor: string) => {
    setcolor(newColor)
    setActive(false)
  }
  return (
    <Box sx={stylePicker}>
      <ButtonModal onClick={handleColorSwitch}>Color</ButtonModal>
      <Box sx={{ ...styleSpisok, display: active ? 'block' : 'none' }}>
        <Grid container spacing={4}>
          {newArray.map((e) => (
            <Grid key={e.name} item xs={4}>
              <Box
                onClick={() => handleColorChange(e.name)}
                sx={{ ...colorStyle, background: e.name }}
              ></Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default ColorPicker
