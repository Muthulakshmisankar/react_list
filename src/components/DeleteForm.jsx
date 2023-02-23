import React from 'react';

function DeleteModal({ item, onDelete, onCancel }) {
  const handleDelete = () => {
    onDelete(item);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to delete {item.name}?</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default DeleteModal;
