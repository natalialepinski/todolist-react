import { Task } from '../../interfaces/task'
import styles from './TaskList.module.css'

import { Trash, Check } from '@phosphor-icons/react'

interface TaskListProps {
    data: Task
    onDeleteTask: (id: number) => void
    onToggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void 
}

export function TaskList({ data, onDeleteTask, onToggleTaskStatus }: TaskListProps) {
    const checkboxCheckedClassname = data.isChecked ? styles['checkbox-checked'] : styles['checkbox-unchecked']
    const paragraphCheckedClassname = data.isChecked ? styles['paragraph-checked'] : ''

    function handleTaskToggle() {
        onToggleTaskStatus({ id: data.id, value: !data.isChecked });
    }

    function handleDelete() {
        onDeleteTask(data.id);
    }

    return(
       <div className={styles.container}>
            <div>
                <label 
                    htmlFor="checkbox" 
                    onClick={handleTaskToggle}>
                    <input 
                        type="checkbox" 
                        checked={data.isChecked}
                        readOnly 
                    />
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        {data.isChecked && <Check size={12} />}
                    </span>
                    <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                        {data.text}
                    </p>
                </label>
            </div> 
            <button onClick={handleDelete}>
                <Trash size={16} color="#808080" />
            </button>
       </div> 
    )
}