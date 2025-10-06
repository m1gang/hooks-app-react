import { useCounter } from "../hooks/useCounter";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {

    const { counter, increment, decrement } = useCounter(612);
    const { pokemon, isLoading, formatedId } = usePokemon({ id: counter });
    if (!pokemon) {
        return (
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Pokémon</h1>
                <h3 className="text-xl font-bold text-white">
                    Pokemon no encontrado
                </h3>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Pokémon</h1>
                <h3 className="text-xl font-bold text-white">
                    Cargando ...
                </h3>
            </div>
        )
    }


    return (
        <div className="bg-gradient flex flex-col items-center">
            <h1 className="text-2xl font-thin text-white">Pokémon</h1>
            <h3 className="text-xl font-bold text-white">#{formatedId} {pokemon.name}</h3>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`}
                alt={pokemon.name}
            />

            <div className="flex gap-2">

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                    onClick={decrement}
                >
                    Anterior
                </button>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                    onClick={increment}
                >
                    Siguiente
                </button>

            </div>
        </div>
    );
};