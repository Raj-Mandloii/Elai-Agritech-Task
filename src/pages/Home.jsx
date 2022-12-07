import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CounterContext } from './context/CountContext';

export const Home = () => {
    const { state, incrementCounter } = useContext(CounterContext);
    return (
        <div style={{ margin: "auto", width: "10%",border:"1px solid black",padding:"3em",marginTop:"5rem" }}>
            <h1 style={{display:"flex",justifyContent:"center"}}>{state.count}</h1>
            <div >
                <button style={{borderRadius:"20px", marginLeft:"2.7rem",marginBottom: "1rem",backgroundColor:"#CFE2F3",border:"0.2px solid black",padding:"1rem" }} onClick={() => incrementCounter()}>Button</button>
                <br />
                <Link to={"/dashboard"}>
                    <button style={{ borderRadius:"20px", marginLeft:"2rem",marginBottom: "1rem",backgroundColor:"#CFE2F3",border:"0.2px solid black",padding:"1rem" }} >Go to Next</button>
                </Link>

            </div>
        </div>
    )
}
