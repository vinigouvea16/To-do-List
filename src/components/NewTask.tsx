import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './NewTask.module.css'

type NewTaskProps = {
  onCreateNewTask: (title: string) => void
}

export function NewTask({ onCreateNewTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onCreateNewTask(newTaskText)
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }
  const isNewTextEmpty = newTaskText.length === 0
  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <input
        onChange={handleNewTaskChange}
        value={newTaskText}
        placeholder="Adicione uma nova tarefa"
        name="tasks"
        required
      />
      <button type="submit" disabled={isNewTextEmpty}>
        <span>Criar</span>
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
