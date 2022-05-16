import { TextField } from '@mui/material'
import React, { FC, useState } from 'react'

const MainContentInput: FC<any> = ({ setInputCheck, name }) => {
  const [inputValue, setInputValue] = useState(name)
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      setInputCheck(false)
    }
  }
  const style = {
    borderBottomColor: 'red',
    '& .MuiInputBase-root': {
      color: 'white',
      borderBottomColor: '#2e2e39',
    },
    // '& .MuiFilledInput-root': {
    //   borderBottomColor: 'grey',
    // },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'grey',
    // },
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
