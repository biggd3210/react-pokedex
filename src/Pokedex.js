import React from "react";
import Pokecard from "./Pokecard";
import pokemon from "./pokemonArr";

function Pokedex() {
    
    
    return (
        <div>
            {pokemon.map(p => <Pokecard key={p.id} pokemon={p} />)}
        </div>
    )
}

export default Pokedex;