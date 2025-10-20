
import { useReducer } from 'react';
import { counterReducer } from './reducer/counterReducer'

export const Contador = () => {

    const [state, dispatch] = useReducer(counterReducer, 0);
    const suma = () => {
        dispatch({ type: 'ADD' })
    }
    const resta = () => {
        dispatch({ type: 'LESS' })
    }
    const reset = () => {
        dispatch({ type: 'RESET' })
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={suma}>Añadir</button>
            <button onClick={resta}>Restar</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
