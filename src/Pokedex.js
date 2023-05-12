import React from 'react';
import './Pokedex.css';

import Pokecard from './Pokecard';
import pokemon from './pokemon'

const Pokedex = ({ pokemonList = pokemon }) => (
    <div className="Pokedex">
        <h1 className="Pokedex-header">Pokedex</h1>
        <div className='Pokedex-Pokecards'>
        { pokemonList.map(p => <Pokecard key={p.id} pokemon={p}/>)} 
        </div>
    </div>
)

export default Pokedex;