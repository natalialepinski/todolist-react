import styles from './TaskListHeader.module.css'

interface TaskListHeaderProps {
    tasksCounter: number
    checkedTasksCounter: number
}

export function TaskListHeader({ tasksCounter, checkedTasksCounter }: TaskListHeaderProps) {
    return(
        <header className={styles.container}>
            <aside>
                <p>Total</p>
                <span>{tasksCounter}</span>
            </aside>
    
            <aside>
                <p>Done</p>
                <span>
                    {tasksCounter === 0 ? tasksCounter : `${checkedTasksCounter} of ${tasksCounter}`}
                </span>
            </aside>
        </header>
    )
}