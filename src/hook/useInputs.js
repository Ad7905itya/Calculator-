import { useContext } from 'react'
import { InputValue } from '../Context/SetInput';

export const useInputs = () => {
    const Context = useContext(InputValue);

    return Context
}


