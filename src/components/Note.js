import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
  return (
    <div className="note">
      <span>Note 1!...........</span>
      <div className="note-footer">
        <small>05/04/2022</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
