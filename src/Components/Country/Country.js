import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div className="country">
            <img src={props.country.flags.png} alt={props.country.name.common} />
            <h2>{props.country.name.common}</h2>
            <p><small>Population: {props.country.population}</small></p>
            <p><small>Region: {props.country.region}</small></p>
            <p><small>Region: {props.country.cca3}</small></p>
            <button onClick={() => props.addCountryHandler(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;