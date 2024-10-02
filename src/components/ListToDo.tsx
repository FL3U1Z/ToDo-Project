import styles from './ListToDo.module.css';
import { Clipboard, PlusCircle } from 'phosphor-react';
import { Task } from './Task';
import { useState, ChangeEvent, FormEvent } from 'react';

export function ListToDo() {
    const [tasks, setTasks] = useState<string[]>(['Crie sua primeira task!']);
    const [newTask, setNewTask] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        setTasks([...tasks, newTask]);
        setNewTask('');
    }
    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => task !== taskToDelete);
        setTasks(tasksWithoutDeletedOne);
    }

    
    const isNewTaskEmpty = newTask.length === 0;

    return (
        <div className={styles.body}>
            <form onSubmit={handleCreateNewTask} className={styles.inputForm}>
                <input
                    onChange={handleNewTaskChange}
                    value={newTask}
                    placeholder="Adicione uma nova tarefa"
                />
                <button disabled={isNewTaskEmpty} type="submit">
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>

            <header className={styles.headerTask}>
                <div className={styles.numberTask}>
                    <div className={styles.NumberAlign}>
                        <p className={styles.createTasks}>Tarefas criadas</p>
                        <p className={styles.qtdTask}>{tasks.length}</p>
                    </div>
                    <div className={styles.NumberAlign}>
                        <p className={styles.doneTasks}>Concluídas</p>
                        <p className={styles.qtdTask}>
                            {tasks.length > 0 ? `0 de ${tasks.length}` : '0'}
                        </p>
                    </div>
                </div>
            </header>

            <div>
                {tasks.length > 0 ? (
                    <div className={styles.fillTask}>
                        {tasks.map(task => (
                            <Task key={task} descTask={task} deleteTask={deleteTask} />
                        ))}
                    </div>
                ) : (
                    <main className={styles.emptyTask}>
                        <Clipboard className={styles.clipBoard} size={56} />
                        <p className={styles.boldFont}>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </main>
                )}
            </div>
        </div>
    );
}
