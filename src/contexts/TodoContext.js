import { createContext } from "react";

const TodoContext = createContext();

export const todoProvider = ({ children }) => {
    return (
        <TodoContext.Provider>
            {children}
        </TodoContext.Provider>
    );
}