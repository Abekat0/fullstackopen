import { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/services'
import FeedbackMsg from './components/FeedBackMsg'
const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personFilter, setPersonFilter] = useState('')
  const [feedbackMsg, setFeedbackMsg] = useState(null)
  const [feedbackStyle, setFeedbackStyle] = useState("succesful")

  useEffect(() => {
    personService
      .getAllPersons()
      .then(initialPersonData => {
        setPersons(initialPersonData)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)

  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setPersonFilter(event.target.value)
  }

  const displayFeedback = (newMsg, feedbackStyle) => {
    setFeedbackMsg(newMsg)
    setFeedbackStyle(feedbackStyle)
    setTimeout(() => {
      setFeedbackMsg(null)
    }, 5000)

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const personExistsInPhonebook = persons.filter(
      (person) => person.name === newName
    ).length > 0

    const resetForm = () => {
      setNewName('')
      setNewNumber('')
    }


    if (!personExistsInPhonebook) {
      const newPerson = { name: newName, number: newNumber }
      personService
        .addPerson(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          resetForm()
        })
      displayFeedback(`Added ${newPerson.name} to the phonebook`, "succesful")

    }
    else {
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const id = persons.find(person => person.name === newName).id
        personService
          .updateNumber(id, newNumber)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== returnedPerson.id ? p : returnedPerson))
            resetForm()
            displayFeedback(`Updated ${newName}'s number to ${newNumber}`, "succesful")
          })
          .catch(() => {
            displayFeedback(` ${newName} has already been deleted from the server`, "error")
            setPersons(persons.filter(p => p.name !== newName))
          })

      }
    }


  }

  const handleDelete = (person) => {
    if (confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(person.id)
        .then(returnedPerson =>
          setPersons(persons.filter(p =>
            p.id !== returnedPerson.id))
        )
      displayFeedback(`Deleted ${person.name} from the phonebook`, "succesful")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FeedbackMsg msg={feedbackMsg} style={feedbackStyle} />
      <Filter value={personFilter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        onSubmit={handleSubmit}
        nameValue={newName}
        onChangeName={handleNameChange}
        numberValue={newNumber}
        onChangeNumber={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} personFilter={personFilter} deletePerson={handleDelete} />
    </div>

  )
}

export default App