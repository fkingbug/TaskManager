import React, { FC, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { InputBase } from '@mui/material'
import { style, styleModalInput } from './MyModal.style'
import { MyModalProp, TodoProp } from '../../features/MyModalProp'
import MySelect from '../MySelect/MySelect'
import ColorPicker from '../ColorPicker/ColorPicker'
import ButtonModal from '../ButtonModal/ButtonModal'
import { Controller, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../hooks/redux'
import { taskAPI } from '../../services/TaskServise'
import { SideBarItemProp } from '../../features/SideBarItemProp'

const MyModal: FC<MyModalProp> = ({ open, handleOpen, handleClose, value }) => {
  const {
    watch,
    control,
    formState: { isValid },
    register,
    handleSubmit,
  } = useForm<TodoProp>({
    defaultValues: value || { color: '#ff3232' },
  })
  const color = watch('color')
  const [createPost, {}] = taskAPI.useCreateTasksMutation()

  const handleFormSub = async (data: any) => {
    handleClose()
    // dispatch(PostTasks(data))
    await createPost(data as SideBarItemProp)
  }

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <form onSubmit={handleSubmit((data) => handleFormSub(data))}>
          <Box sx={style}>
            <InputBase
              {...register('name')}
              placeholder='Enter name'
              fullWidth
              sx={styleModalInput}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Controller
                name='icon'
                control={control}
                render={({ field: { onChange } }) => {
                  return <MySelect setType={onChange} color={color} />
                }}
              />

              <Controller
                name='color'
                defaultValue={'#ff3232'}
                control={control}
                render={({ field: { onChange } }) => <ColorPicker setcolor={onChange} />}
              />
              <ButtonModal coloraaa={color} type='submit' disabled={!isValid}>
                Create
              </ButtonModal>
            </Box>
          </Box>
        </form>
      </Modal>
    </Box>
  )
}
export default MyModal
