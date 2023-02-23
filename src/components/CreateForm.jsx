import React, { useState } from 'react';

function CreateForm({ handleCreateFormSubmit }) {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateFormSubmit({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateForm;
