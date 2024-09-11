import CountryInfo from "./CountryInfo"
import { useState } from "react"
const Display = ({ candidates, searchQuery }) => {

    //it's better to let App handle some of the logic done here, this is just a quick solution
    //It could be a better solution to have handleSearchChange reset countryToDisplay on change.
    const [countryToDisplay, setCountryToDisplay] = useState('')
    const matches = candidates.filter(country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()))
    if (matches.length === 0) {
        return (<p>None found</p>)
    }
    else if (matches.length > 10) {
        return (<p>Too many matches, specify another filter</p>)
    }
    else if (matches.length === 1) {
        let country = matches[0]
        return (
            <div>
                <CountryInfo country={country} />
            </div>
        )
    }
    else if (countryToDisplay) {
        return (
            <div>
                <button onClick={() =>
                    setCountryToDisplay('')}>
                    return to list
                </button>
                <CountryInfo country={countryToDisplay} />
            </div>
        )
    }

    else {
        return (
            matches.map(country =>
                <p key={country.name.common}>
                    {country.name.common}
                    <button onClick={() =>
                        setCountryToDisplay(country)}>
                        show
                    </button>
                </p>)
        )
    }
}

export default Display