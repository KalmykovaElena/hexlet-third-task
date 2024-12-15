import React from 'react';
import styles from '../styles/DocumentCard.module.css';

const DocumentCard = ({ document }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', document.id);
    };

    return (
        <div 
            draggable 
            onDragStart={handleDragStart} 
            className={styles.card}
        >
            {document.title}
        </div>
    );
};

export default DocumentCard;