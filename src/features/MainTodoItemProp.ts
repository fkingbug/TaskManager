export interface TodosItemProp {
  idTask: string
  isComplete: boolean
  todo: string
  color: string
  handleDeleteTodoItem: (idTodoItem: string) => void
  handleComplete: (idTodoItem: string) => void
}
