import React, { useState } from "react";

export const CounterContext = React.createContext();

function CounterProvider({ children }) {
    const [state, setState] = useState({
        count: 0,
    });
   
    function incrementCounter() {
        setState({
            ...state,
            count: state.count + 1,

        });
    }


    return (
        <CounterContext.Provider value={{ state, incrementCounter }}>
            {children}
        </CounterContext.Provider>
    );
}

export default CounterProvider;
