import React, { useState } from 'react';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState('');

  const characterLimit = 200;

  // triggered on the textarea input
  const handleNewTextChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNewText(event.target.value);
    }
  };

  return (
    <div className="note">
      <span>{text}</span>
      {isEdit && (
        <textarea
          rows="8"
          cols="10"
          placeholder="Edit"
          onChange={handleNewTextChange}
        ></textarea>
      )}

      <div className="note-footer">
        <small>{date}</small>
        <div className="icons">
          <FaEdit className="edit-icon" onClick={() => setIsEdit(true)} />
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size="1.3em"
            data-testid="note-id"
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
