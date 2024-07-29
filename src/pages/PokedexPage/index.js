import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Poke from "../../components/Poke";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const pokemon_count = 251;

  useEffect(() => {
    const colors = {
      normal: "#dcdcdc",
      fire: "#ff6900",
      water: "#14b9ff",
      grass: "#b4f000",
      electric: "#ffe100",
      ice: "#14f5ff",
      fighting: "#dc6900",
      poison: "#d28cd2",
      ground: "#fac85a",
      flying: "#78dcff",
      psychic: "#f08cdc",
      bug: "#46c846",
      rock: "#b48c64",
      ghost: "#a08cff",
      dragon: "#5078dc",
      dark: "#787878",
      steel: "#aac8f0",
      fairy: "#ffafdc",
    };

    const fetchPokemons = async () => {
      for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
      }
    };

    const getPokemon = async (id) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const res = await fetch(url);
      const data = await res.json();
      createPokemonCard(data);
    };

    const createPokemonCard = (data) => {
      const pokemon = {
        src: data.sprites.front_default,
        name: data.name[0].toUpperCase() + data.name.slice(1),
        number: "#" + data.id.toString().padStart(3, "0"),
        type: data.types.map((type) => type.type.name),
        color: null,
      };

      const typeColors = data.types.map((type) => colors[type.type.name]);

      if (typeColors.length === 1) {
        pokemon.color = typeColors[0];
      } else if (typeColors.length === 2) {
        pokemon.color = `linear-gradient(to right, ${typeColors[0]}, ${typeColors[1]})`;
      }

      setPokemons((prevState) => [...prevState, pokemon]);
    };

    fetchPokemons();
  }, []);

  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Pokedex</h1>
      <div className={styles.pokeContainer}>
        {pokemons.map((pokemon, index) => (
          <Poke
            key={index}
            src={pokemon.src}
            name={pokemon.name}
            number={pokemon.number}
            type={pokemon.type}
            color={pokemon.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
