import React from 'react';

function Data(props) {
    // console.log('Props',props.nasaData);
    return (
        <div>
            <h2>{props.nasaData.title}</h2>
            <h3>{props.nasaData.date}</h3>
            <img className="container" src={props.nasaData.hdurl} />
            <p className="container">{props.nasaData.explanation}</p>
        </div>
    )

}

export default Data;