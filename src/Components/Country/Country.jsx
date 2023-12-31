import { useState } from "react";



const Country = ({ country, handleVisitedCountries }) => {

    const { name, flags, region, population, area } = country;

    // Toggle Area
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`box ${visited ? 'visited' : 'non-visited'}`}> {/*  Toggle the Background */}
            <h3 style={{ color: visited ? 'magenta' : 'teal' }}>Name: {name?.common}</h3>
            <img src={flags?.png} alt="#" />
            <h5>Population: {population}</h5>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            {/* যাতে বাববার রিপিট না হয় তার জন্য () => handleVisitedCountries() লিখতে হবে */}
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <br />
            {/*  Toggle Area button */}
            <button style={{ backgroundColor: visited ? 'yellow' : 'white' }} onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>

            {visited ? "I have visited the country" : "I want to visit the country"}
        </div>
    );
};

export default Country;