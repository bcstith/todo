import './App.css';
import Header from './Components/Header';
import CreateArea from './Components/CreateArea';
import React, {useState} from 'react';
import Note from './Components/Note';
import Footer from './Components/Footer';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index!==id;
      });
    });
  }

  return (
    <div>
        <Header />
        <CreateArea  onAdd={addNote}/>
        {notes.map((noteItem, index) => {
          return (
            <Note
              key = {index}
              id = {index}
              title = {noteItem.title}
              content = {noteItem.content}
              onDelete = {deleteNote}
            />
          )
        } )}

        <Footer />
    </div>
  );
}

export default App;
