import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <div className="icons">
          <FaEdit className="edit-icon" onClick={() => handleEditNote(id)} />
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
