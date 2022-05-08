export interface TasksProp {
  id: string
  name: string
  icon: string
  color: string
  todos: TodosPropCreate[]
}
export interface TodosPropCreate {
  isComplete: boolean
  todo: string
}
