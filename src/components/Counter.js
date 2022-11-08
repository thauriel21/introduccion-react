import { useState } from "react"

const Counter = (props) => {
    const [count, setCount] = useState(0)
    return (
        <>
            <span>cantidad: {count}</span>
            <button onClick={() => setCount(count + 1)}>
                contar
            </button>
            <br />
            <button onClick={() => setCount(count - 1)}>
                restar
            </button>
            <br />
        </>
    )
}
export default Counter