import { useState } from "react";


function Counter(){

    const [count, setCount] = useState(0);

    return (
        <div>
            <button className="font-bold text-lg hover:text-blue-600" onClick={() => setCount(count - 1)}>-</button>
            <input className="w-10 text-center" value={count} />
            <button className="font-bold text-lg hover:text-blue-600" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Counter;