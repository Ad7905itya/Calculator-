import { createContext, useState } from "react";

export const InputValue = createContext();

const InputContext = ({children}) => {
    const [Value, setValue] = useState('');
    return(
        <InputValue.Provider value={[Value,setValue]}>
            {children}
        </InputValue.Provider>
    )
}

export default InputContext