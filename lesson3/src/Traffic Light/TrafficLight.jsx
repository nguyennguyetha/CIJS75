import { useState } from "react";
import "./style.css";


const TrafficLight = () => {
    const [count, setCount] = useState(2);
    return (
        <div className="trafficlight">
            <div className="radio">
            <Light color="#f00" active={color === 1} />
            <Light color="#ff0" active={color === 2} />
            <Light color="#0c0" active={color === 3} />
            </div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Next</button>
     
        </div>
    )

}
export default TrafficLight;