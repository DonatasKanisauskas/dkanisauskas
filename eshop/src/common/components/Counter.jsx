import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(1);

    const onChange = (event) => {
        var input = event.target.value;
        // var reg = /^-?[0-9]\d*(\.\d+)?$/;
        // if(!reg.test(input)) return;
        setCount(parseInt(input));
    };

    return (
        <div className="p-5 flex justify-left">
            <button className="font-thin text-xl hover:text-blue-600 border border-black px-3 bg-white" onClick={() => setCount(prev => prev - 1)}>-</button>
            <input className="w-20 text-center border border-black" value={count} onChange={onChange} type="number" />
            <button className="font-thin text-xl hover:text-blue-600 border border-black px-3 bg-white" onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    )
}

export default Counter;