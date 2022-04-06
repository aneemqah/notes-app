import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import Note from './components/Note';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [darkmode, setDarkMode] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Learn react',
      date: '22/02/2022',
    },
    {
      id: nanoid(),
      text: 'Learn Javascript',
      date: '21/03/2022',
    },
    {
      id: nanoid(),
      text: 'My third note',
      date: '01/03/2022',
    },
  ]);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote = (id) => {
    const newNotes = notes.filter((note) => note.id === id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkmode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleEditNote={editNote}
        />
      </div>
    </div>
  );
};

export default App;
