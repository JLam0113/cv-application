import './App.css'
import General from './components/general.jsx'
import Education from './components/education.jsx'
import Experience from './components/experience.jsx'
import { useState } from 'react'

function App() {
  const [isEditing, setIsEditing] = useState(true);


  return (
    <>
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    }}>
      <General isEditing={isEditing}></General>
      <Education isEditing={isEditing}></Education>
      <Experience isEditing={isEditing}></Experience>
      <button type="submit">
        {isEditing ? 'Save' : 'Edit'}
      </button>
      </form>
    </>
  )
}

export default App
