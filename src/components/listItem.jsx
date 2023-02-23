import React from 'react';

function ListItem({ item, onItemClick, onDeleteClick }) {
  return (
    <li>
      <span>{item.name}</span>
      <button onClick={() => onItemClick(item)}>Edit</button>
      <button onClick={() => onDeleteClick(item)}>Delete</button>
    </li>
  );
}

export default ListItem;