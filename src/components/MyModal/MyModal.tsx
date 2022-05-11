import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { InputBase } from '@mui/material'
import { style, styleModalInput } from './MyModal.style'
import { MyModalProp, TodoProp } from '../../features/MyModalProp'
import MySelect from '../MySelect/MySelect'
import ColorPicker from '../ColorPicker/ColorPicker'
import ButtonModal from '../ButtonModal/ButtonModal'
import { Controller, useForm } from 'react-hook-form'
import { taskAPI } from '../../services/TaskServise'
import { TasksProp, TodosPropCreate } from '../../features/TasksProp'
import { taskSlice } from '../../store/reducers/taskSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'

const MyModal: FC<MyModalProp> = ({ value }) => {
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
  const [createPost] = taskAPI.useCreateTasksMutation()

  const { isModal } = useAppSelector((state: any) => state.taskReducer)
  const { modalSwitch } = taskSlice.actions
  const dispatch = useAppDispatch()

  const handleFormSub = (data: any) => {
    dispatch(modalSwitch(false))
    const postData = { ...data, todos: [] as TodosPropCreate[] }
    createPost(postData as TasksProp)
  }

  const handleClose = () => dispatch(modalSwitch(false))

  return (
    <Box>
      <Modal open={isModal} onClose={handleClose}>
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
