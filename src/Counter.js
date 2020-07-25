import React, {useState} from 'react'
import './App.css';
import CountButton from "./CountButton";

function Counter(props) {
    const [count, setCount] = useState(0)

    const updateCounter = (n) => {
        setCount(n)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <button className={"res"} onClick={reset}>Reset</button>

            <CountButton value={-3} count={count} updateCounter={updateCounter}/>
            <CountButton value={-2} count={count} updateCounter={updateCounter}/>
            <CountButton value={-1} count={count} updateCounter={updateCounter}/>
            <span className="btn">{count}</span>
            <CountButton value={1} count={count} updateCounter={updateCounter}/>
            <CountButton value={2} count={count} updateCounter={updateCounter}/>
            <CountButton value={3} count={count} updateCounter={updateCounter}/>
        </div>
     );
}

export default Counter;
