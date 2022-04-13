import React, { useState } from 'react';

import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { MdDownloadDone } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote, handleEditedNote }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(text);

  const characterLimit = 200;

  // Checks that the edited note does not exceed 200 characters
  const handleNewTextChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      // console.log(event.target.value.length);
      setNewText(event.target.value);
    }
  };

  // Checks when edit button is clicked the edit state is set to true and the modified text is set as the new text
  const handleEdit = () => {
    setIsEdit(true);
    setNewText(newText);
  };

  // Calls the edit note function from app.js and sets the edit mode back to false
  const handleSaveEdit = () => {
    handleEditedNote(id, newText);
    setIsEdit(false);
  };

  return (
    <div className="note">
      <span>{text}</span>

      {isEdit && (
        <div>
          <div>
            <textarea
              className="new-text"
              rows="8"
              cols="10"
              placeholder="Edit"
              name="text"
              value={newText}
              onChange={handleNewTextChange}
            ></textarea>
          </div>
          <small>{characterLimit - newText.length}</small>
        </div>
      )}

      <div className="note-footer">
        <small>{date}</small>
        <div className="icons">
          {/* Display save icon only if edit is true */}
          {!isEdit ? (
            <FaEdit className="edit-icon" onClick={(e) => handleEdit()} />
          ) : (
            <MdDownloadDone
              className="save-icon"
              onClick={() => handleSaveEdit()}
            />
          )}
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
