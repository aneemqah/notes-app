import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [darkmode, setDarkMode] = useState(false);
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
    localStorage.setItem('react-notes-app-data', JSON.stringify(newNotes));
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote = (id, text) => {
    // Create a copy of the current state i.e notes
    const newNotes = [...notes];
    // console.log('I am newNotes', newNotes);
    // Find the note to edit in newNotes array
    let index = newNotes.findIndex((n) => n.id === id);
    // console.log('I am the note', index);
    // Update the text of the note with the new edited text
    newNotes[index].text = text;
    // Set the state of notes with new the notes
    setNotes(newNotes);
    // Pass the newNotes to localstorage
    localStorage.setItem('react-notes-app-data', JSON.stringify(newNotes));
  };

  return (
    // If darkmode (state) then apply dark-mode css class
    <div className={`${darkmode && 'dark-mode'}`}>
      <div className="container">
        <Header handelToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleEditedNote={editNote}
        />
      </div>
    </div>
  );
};

export default App;
