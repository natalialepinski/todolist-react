import styles from './NewTask.module.css'

interface NewTaskProsps {
    inputValue: string;
    onInputChange: (inputValue: string) => void;
    onAddTask: (inputValue: string) => void;
}

export function NewTask({ inputValue, onInputChange, onAddTask }: NewTaskProsps) {

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onInputChange(e.target.value);
    }

    function handleAddTask() {
        onAddTask(inputValue);
    }

    return(
        <div className={styles.container}>
            <input
                className={styles.input}
                placeholder="Add a new task"
                value={inputValue}
                onChange={handleChange} 
            />
            <button 
                className={styles.button}
                onClick={handleAddTask}
            >
                Criar
            </button>  
        </div>
    )
}