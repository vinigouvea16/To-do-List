import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.css'

type TaskProps = {
  id: string
  title: string
  isComplete: boolean
  onCompleteTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function Task({
  id,
  title,
  isComplete,
  onCompleteTask,
  onDeleteTask,
}: TaskProps) {
  function handleClick() {
    onCompleteTask(id)
  }
  function handleDeleteClick() {
    onDeleteTask(id)
  }
  return (
    <div className={styles.wrapper} data-complete={isComplete}>
      <Checkbox.Root
        className={styles.checkbox_root}
        onCheckedChange={() => handleClick()}
        checked={isComplete}
      >
        <Checkbox.Indicator>
          <Check size={16} />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <p>{title}</p>
      <button
        className={styles.trash}
        onClick={() => handleDeleteClick()}
        title="deletar tarefa"
      >
        <Trash size={20} color="#808080" weight="bold" />
      </button>
    </div>
  )
}
