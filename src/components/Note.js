import React, { useState } from 'react';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { MdDownloadDone } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState('');

  // const characterLimit = 200;

  // const handleNewTextChange = (event) => {
  //   if (characterLimit - event.target.value.length >= 0) {
  //     setNewText(event.target.value);
  //   }
  // };

  const handleEdit = () => {
    setIsEdit(true);
    setNewText(newText);
  };

  return (
    <div className="note">
      <span>{text}</span>
      {isEdit && (
        <textarea
          rows="8"
          cols="10"
          placeholder="Edit"
          name="text"
          value={newText.text}
          onChange={handleEdit}
        >
          {text}
        </textarea>
      )}

      <div className="note-footer">
        <small>{date}</small>
        <div className="icons">
          <FaEdit className="edit-icon" onClick={(e) => handleEdit()} />
          {/* <MdDownloadDone
            className="save-icon"
            onClick={(e) => handleEditedNote(id)}
          /> */}

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
