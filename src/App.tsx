import './global.css';
import styles from './App.module.css';

import { useState } from 'react';

import { Task } from './interfaces/task';

import { Header } from './components/Header/Header';
import { NewTask } from './components/NewTask/NewTask';
import { TaskList } from './components/TaskList/TaskList';
import { Empty } from './components/Empty/Empty';
import { TaskListHeader } from './components/TaskListHeader/TaskListHeader';

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)
  
  function handleAddTask(value: string) {
    if (!value) {
      return
    }

    const newTask: Task = {
      id: new Date().getTime(),
      text: value,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('');
  }

  function handleInputChange(value: string) {
    setInputValue(value);
  }

  function handleDeleteTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Are you sure you want to delete this task?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <div>
      <Header />
      <section className={styles.content}>
        <NewTask 
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onAddTask={handleAddTask}
        />

        <div className={styles.tasksList}>
          <TaskListHeader 
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <TaskList
                  key={task.id}
                  data={task}
                  onDeleteTask={handleDeleteTask}
                  onToggleTaskStatus={handleToggleTask}
                  
                />
              ))}
            </div>
          ) : ( 
            <Empty />
          )}
        </div>
      </section>
    </div>
  )
}

