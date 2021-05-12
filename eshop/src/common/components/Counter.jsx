import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(1);

    const onChange = (event) => {
        setCount(parseInt(event.target.value));
    };

    return (
        <div className="p-5 flex justify-left">
            <button className="font-thin text-xl hover:bg-indigo-50 border border-black px-3 bg-white" onClick={() => setCount(prev => prev - 1)}>-</button>
            <input className="w-20 text-center hover:bg-indigo-50 border border-black" value={count} onChange={onChange} type="number" />
            <button className="font-thin text-xl hover:bg-indigo-50 border border-black px-3 bg-white" onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    )
}

export default Counter;