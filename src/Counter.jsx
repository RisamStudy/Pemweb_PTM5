import React, { useState } from "react";

function Counter(){
    // inisialisasi state count dengan nilai awal 0
    const [count, setCount] = useState(0);

    // Handler Untuk Menambah Count
    const increment= () => {
        setCount(count + 1);
    };

    // Handler untuk mengurangi count
    const decrement = () => {
        setCount(count - 1 );
    };

    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
}

export default Counter;