import React from "react";
import './Pokecard.css';


function Pokecard ({pokemon}) {
    let {id, name, type, base_experience} = pokemon;
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="Pokecard">
            <h3 className="pokemon-name">{name}</h3>
            <img src={url} alt='pokemon img'/>
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    )
}

export default Pokecard