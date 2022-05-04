export interface MyModalProp {
  open: boolean
  handleOpen: () => void
  handleClose: () => void
  value?: TodoProp
}

export interface TodoProp {
  name: string
  icon: string
  color: string
}
