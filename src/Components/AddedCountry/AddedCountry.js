import React from 'react';

const AddedCountry = (props) => {
    const country = props.addedCountry;
    return (
        <div>
           <h4>Added Country: {country.length}</h4>
           <ol>
            {
                country.map(country=> <li key={country.name.common}>{country.name.common}</li>)
            }
           </ol>
        </div>
    );
};

export default AddedCountry;