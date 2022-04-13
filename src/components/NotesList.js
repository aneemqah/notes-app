import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditedNote,
}) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          handleEditedNote={handleEditedNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
