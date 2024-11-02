import Note from './components/notes'
import { useEffect, useState } from 'react'
import noteService from './services/notes'

const App = (props) => {
  const [notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState('')
  const [showAll,setShowAll] = useState(true)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  console.log('render', notes.length, 'notes')
  
  const toggleImportanceOf = (id) => {
    const url=`http://localhost:3001/notes/${id}`
    const note=notes.find(n=>n.id===id)
    const changedNote = {...note,important:!note.important}

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id === id ? returnedNote : note))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const addNote = (event )=>{
    event.preventDefault()
    const noteObject={
      content:newNote,
      important:Math.random() <0.5, //if the generated number <0.5 =>true else false
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }
  
  const handleNoteChange = (event) =>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const NotesToShow = showAll? notes:notes.filter(note=>note.important===true)
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=>setShowAll(!showAll)}>
          show {showAll?'important':'all'}
        </button>
      </div>
      <ul>
        {NotesToShow.map(note => 
          <Note 
          key={note.id} 
          note={note} 
          toggleImportance={()=>toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote}
        onChange={handleNoteChange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App