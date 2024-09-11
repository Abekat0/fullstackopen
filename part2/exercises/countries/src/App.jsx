import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display'
function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [countries, setCountries] = useState(null)
  const [candidates, setCandidates] = useState([])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
    if(!event.target.value){
      setCandidates([])
    }
  }

  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    if(countries && searchQuery){
      setCandidates(countries)
    }
  }, [searchQuery])

  return (
    <div>
      find countries: <input
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Display candidates={candidates} searchQuery={searchQuery} />
    </div>
  )
}

export default App
