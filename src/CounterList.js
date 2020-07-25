import React, {useState } from 'react'
import './App.css';
import Counter from "./Counter";

export default function CounterList() {
    const [numberOfCounters, setNumberOfCounters] = useState(1);

     const addCounter = () => {
     setNumberOfCounters(numberOfCounters + 1);

    };
    const delCounter = () => {
        if (numberOfCounters <= 1) {
            return numberOfCounters;
        } else {
            setNumberOfCounters(numberOfCounters - 1)
        }
    };

        return (
            <div>
                <div style={{marginLeft: '180px'}}>
                    <button onClick={addCounter} className="row">Plus Row</button>
                    <button onClick={delCounter} className="row">Minus Row</button>

                </div>

                <ul style={{listStyle: "none"}}>

                    {[...Array(numberOfCounters).keys()].map((el, id) => <li key={id}><Counter/></li>)}

                </ul>


            </div>
        );
    }
