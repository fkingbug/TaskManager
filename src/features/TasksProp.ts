export interface TasksProp {
  id: string
  name: string
  icon: string
  color: string
  todos: TodosPropCreate[]
}
export interface TodosPropCreate {
  idTask: string
  isComplete: boolean
  todo: string
}
