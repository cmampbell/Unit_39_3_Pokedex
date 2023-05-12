import React from 'react';
import './Pokecard.css'

const Pokecard = ({ pokemon: { id, name, type, base_experience: baseExperience } }) => {
    const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    const imgAlt = `Image of pokemon number ${id}, ${name}`

    return (
        <div className="Pokecard">
            <h2 className='Pokecard-name'>{name}</h2>
            <img src={imgURL} alt={imgAlt} className='Pokecard-img'/>
            <p className='Pokecard-info'>Type: {type}</p>
            <p className='Pokecard-info'>EXP: {baseExperience}</p>
        </div>
    )
}

export default Pokecard;