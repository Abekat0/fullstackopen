import Person from "./Person"
const Numbers = ({ persons, personFilter, deletePerson }) => {
    return (
        persons.
            filter(person =>
                person.name.toLowerCase().includes(personFilter.toLowerCase()))
            .map(person =>
                <Person key={person.name} person={person} deletePerson={() => deletePerson(person)} />
            )
    )
}

export default Numbers