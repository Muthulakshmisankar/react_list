import React from 'react';

function List({ items, onItemClick, onItemDeleteClick }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => onItemClick(item)}>Edit</button>
          <button onClick={() => onItemDeleteClick(item)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default List;