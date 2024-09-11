import { useEffect, useState } from "react"
import axios from 'axios'

const CountryInfo = ({ country }) => {
    const api_key = import.meta.env.VITE_SOME_KEY
    const [weather, setWeather] = useState('')
    const lat = country.capitalInfo.latlng[0]
    const lng = country.capitalInfo.latlng[1]
    const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${api_key}`

    useEffect(() => {
        axios.get(link)
            .then(response =>
                setWeather(response.data)
            )
    }, [])
    if (!weather) {
        return (<div>
            <h1>{country.name.common}</h1>
            <p>capital: {country.capital}</p>
            <p>area: {country.area}</p>
            <b>Languages:</b>
            <ul>
                {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
        </div>)
    }

    else {
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital: {country.capital}</p>
                <p>area: {country.area}</p>
                <b>Languages:</b>
                <ul>
                    {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}

                </ul>
                <img src={country.flags.png}></img>
                <h2>Weather in {country.capital}</h2>
                <p>Temperature: {weather.main.temp} {"\u00B0"} C</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                <p>Wind: {weather.wind.speed} m/s</p>
            </div>

        )
    }
}

export default CountryInfo