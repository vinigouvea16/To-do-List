import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './App.module.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Task } from './components/Task'
import './global.css'

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: 'Terminar o desafio',
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: 'Estudar TypeScript',
      isComplete: false,
    },
  ])
  function handleCreateNewTask(title: string) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title,
        isComplete: false,
      },
    ])
  }
  function handleCompleteTask(id: string) {
    const newTasksList = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        }
      }
      return task
    })
    setTasks(newTasksList)
  }

  function handleDeleteTask(id: string) {
    const newTaskList = tasks.filter((task) => id !== task.id)
    setTasks(newTaskList)
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask onCreateNewTask={handleCreateNewTask} />
        <main>
          <header>
            <div className={styles.created}>
              Tarefas criadas
              <span>{tasks.length}</span>
            </div>
            <div className={styles.concluded}>
              Concluídas
              <span>
                {`${tasks.filter((task) => task.isComplete).length} `}
                de {tasks.length}
              </span>
            </div>
          </header>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isComplete={task.isComplete}
                onCompleteTask={handleCompleteTask}
                onDeleteTask={handleDeleteTask}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
