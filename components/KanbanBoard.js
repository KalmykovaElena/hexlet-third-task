import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Column from './Column';
import { addDocument } from '../redux/documentsSlice';
import styles from '../styles/KanbanBoard.module.css';

const KanbanBoard = () => {
    const dispatch = useDispatch();
    const documents = useSelector(state => state.documents);
    const [newDocumentTitle, setNewDocumentTitle] = useState('');

    const handleAddDocument = () => {
        if (newDocumentTitle.trim()) {
            dispatch(addDocument({ id: Date.now().toString(), title: newDocumentTitle, status: 'in-progress' }));
            setNewDocumentTitle('');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Канбан-доска</h1>
            <div className={styles.inputContainer}>
                <input 
                    type="text" 
                    value={newDocumentTitle} 
                    onChange={(e) => setNewDocumentTitle(e.target.value)} 
                    placeholder="Введите название документа" 
                    className={styles.input}
                />
                <button onClick={handleAddDocument} className={styles.button}>Добавить документ</button>
            </div>
            <div className={styles.cardsContainer}>
                <Column title="В работе" status="in-progress" documents={documents} />
                <Column title="На проверке" status="under-review" documents={documents} />
                <Column title="Завершено" status="completed" documents={documents} />
            </div>
        </div>
    );
};

export default KanbanBoard;