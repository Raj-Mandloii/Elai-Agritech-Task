import React, { useContext } from 'react'
import { CounterContext } from './context/CountContext';

export const Dashboard = () => {
    const { state, incrementCounter } = useContext(CounterContext);
    return (
        <div style={{ margin: "auto", width: "10%" }}>
            <h1>{state.count}</h1>

        </div>
    )
}
