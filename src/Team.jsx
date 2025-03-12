import { useState } from "react"

export default function Team () {

    const [Count, setCount] = useState(0)

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }


    const handleAdd = () => {
        const newCount = Count + 1;
        setCount(newCount);
    }

    const handleSub = () => {
        const newCount = Count - 1;
        setCount(newCount);
    }
    



    return (
        <div style={teamStyle}>
            <h3>Players: {Count}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleSub}>Sub</button>
        </div>

    )
}