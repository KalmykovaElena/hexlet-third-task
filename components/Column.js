import React from 'react';
import DocumentCard from './DocumentCard';
import { useDispatch } from 'react-redux';
import { moveDocument } from '../redux/documentsSlice';
import styles from '../styles/Column.module.css';

const Column = ({ title, status, documents }) => {
    const dispatch = useDispatch();

    const handleDrop = (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        dispatch(moveDocument({ id, newStatus: status }));
    };

    return (
        <div 
            onDragOver={(e) => e.preventDefault()} 
            onDrop={handleDrop} 
            className={styles.column}
        >
            <h2 className={styles.columnTitle}>{title}</h2>
            <div className={styles.documentList}>
                {documents.filter(doc => doc.status === status).map(doc => (
                    <DocumentCard key={doc.id} document={doc} />
                ))}
            </div>
        </div>
    );
};

export default Column;