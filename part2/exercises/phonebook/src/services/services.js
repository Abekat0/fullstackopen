import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

const getAllPersons = () => {
    const request = axios.get(baseUrl)
    return request
        .then(response =>
            response.data
        )
}

const addPerson = (person) => {
    const request = axios.post(baseUrl, person)
    return request.then(response => response.data)

}

const deletePerson = (id) => {
    console.log(id)
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const updateNumber = (id, number) => {
    console.log(id)

    const request = axios.patch(`${baseUrl}/${id}`, { number: number })
    return request.then(response => response.data)
}


export default { getAllPersons, addPerson, deletePerson, updateNumber }