import { Trash } from 'phosphor-react'
import { useState } from 'react';

import styles from './Task.module.css'

export function Task({ descTask, deleteTask, onCheck  }: any) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
        onCheck(descTask, !isChecked); 
    };
    const handleDeleteTask = () => {
        deleteTask(descTask);
    };

    return (
        <div className={`${styles.card} ${isChecked ? styles.checked : ''}`}>
            <div className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheck}
                    className={styles.customCheckbox}
                />
            </div>
            <span className={`${styles.text} ${isChecked ? styles.textChecked : ''}`}>
                {descTask}
            </span>
            <button className={styles.trashButton} onClick={handleDeleteTask}>
                <Trash className={styles.trashIcon} />
            </button>
        </div>
    );
}