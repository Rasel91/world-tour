import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import '../Countries/Countries.css'

const Countries = () => {

    const [visitedCountries, setVisitedCountries] = useState([]);


    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, []);



    const handleVisitedCountries = country => {
        console.log('add this country');
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry)
        // console.log(county);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <div>
                <h4>VisitedCountries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="grid ">
                {
                    countries.map((country) => <Country country={country} handleVisitedCountries={handleVisitedCountries} key={country.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;