import { TextField } from '@mui/material'
import React, { FC, useState } from 'react'

const MainContentInput: FC<any> = ({ setInputCheck, name, handleChangeName }) => {
  const [inputValue, setInputValue] = useState(name)
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      if (inputValue) {
        handleChangeName(inputValue)
        setInputCheck(false)
      } else {
        setInputCheck(false)
      }
    }
  }
  const style = {
    borderBottomColor: 'red',
    '& .MuiInputBase-root': {
      color: 'white',
      borderBottomColor: '#2e2e39',
    },
  }
  return (
    <TextField
      fullWidth
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={keyDownHandler}
      placeholder={name}
      variant='standard'
      sx={style}
    />
  )
}

export default MainContentInput
