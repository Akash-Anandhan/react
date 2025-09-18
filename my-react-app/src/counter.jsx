import { useState } from "react";

function Counter(){
    const [count , setcount] = useState(0);

    const increment = () => {
        setcount(count +1);
    }

    const decremnet = () => {
        setcount(count - 1);
    }

    const reset = () => {
        setcount(0);
    }
    return(
        <div className="counter-container">
            <div><p className="counter">{count}</p></div>
            <div>
                <button className="update-bts"  onClick={increment}>Increment</button>
                <button className="update-bts" onClick={decremnet}>Decrement</button>
                <button className="update-bts" onClick={reset}>Reset</button>
            </div>
            
        </div>
    );
}
export default Counter;