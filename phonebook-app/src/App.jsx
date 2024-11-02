import { useState,useEffect } from 'react'
import noteService from './services/persons'
import './App.css'

const Filter=({searchQuery,handleSerach})=>{
  return (
    <div>
        Filter shown with <input value={searchQuery} 
        onChange={handleSerach}/>
    </div>
  )
}

const Notification = ({ message, type }) => {
  if (!message) return null;

  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
};

const Form =({addInfo,newName,handleNewName,
  newNum,handleNewNum}) =>{
 return(<form onSubmit={addInfo}>

        <div>
          <h3>Add a new Number</h3>
          <h4>name: <input 
          value={newName}
          onChange={handleNewName}/></h4>
        </div>

        <div>
          <h4>Number: <input
          value={newNum}
          onChange={handleNewNum}
          /></h4>
        </div>

        <div>
          <button type="submit">add</button>
        </div>

      </form>)

}

const Persons= ({personsToShow,deleteInfo}) =>{
  return(
    <ul>
        {personsToShow.map(person =>(
          <li key={person.id}>
            {person.name} : {person.number}   
            <button onClick={(event)=> deleteInfo(event,person.id)}>delete</button>
          </li>
        ))}
      </ul>
  )
}

const App = () => {
  
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')

  const [newNum,setNewNum] = useState('')

  const [searchQuery,setSearchQuery] =useState('')

  const [notification, setNotification] = useState('');
  
  const [notificationType, setNotificationType] = useState('');

  useEffect(() => {
      noteService
      .getAll()
      .then(initialNotes =>{
        setPersons(initialNotes)
      })
  }, [])

  const showNotification = (message, type = 'success') => {
    setNotification(message);
    setNotificationType(type);
    setTimeout(() => setNotification(''), 3000);
  };


  const addInfo=(event)=>{
    event.preventDefault()

    if (newName.trim() === ''){
      alert('enter a valid name')
      return;
    }
    if (newNum.trim() === ''){
      alert('enter a valid number')
      return;
    }


    if (persons.some(person =>person.name===newName)){
      alert(`${newName} is  already added to the phonebook`)
      return;
    }

    const newObj ={
      name:newName,
      number:newNum,
      id: String(persons.length+1),
    }

    noteService
    .create(newObj)
    .then(returnedNote=> {
    setPersons(persons.concat(returnedNote))
    setNewName('')
    setNewNum('')
    showNotification(`Added ${newName}`)
  }
  )
  }
  
  const deleteInfo=(event,id)=>{
    event.preventDefault()
    const a=window.confirm('do you want to delete this record?')
    if (a){
      noteService
    .deleteRec(id)
    .then(()=>{
      setPersons(persons.filter(person =>person.id !== id))
      showNotification(`Record deleted`, 'error')
    })
    }
  }

  const handleNewNum = (event)=>{
    setNewNum(event.target.value)
  }

  const handleNewName = (event) =>{
    setNewName(event.target.value)
  }

  const handleSerach = (event) =>{
    setSearchQuery(event.target.value)
  }

  const personsToShow = persons.filter(person=>person.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    
    <div>
      
      <h1>Phonebook</h1>

      <Notification message={notification} type={notificationType} />

      <Filter searchQuery={searchQuery} handleSerach={handleSerach}/>
      
      <Form addInfo={addInfo} newName={newName}
       handleNewName={handleNewName} newNum={newNum} 
       handleNewNum={handleNewNum}/>
      
      <h3>Numbers</h3>
      
      <Persons personsToShow={personsToShow} deleteInfo={deleteInfo} />

    </div>
  )
}

export default App