import './Counter.css'
import { useState, useEffect } from "react"

function Counter () {

    const [count, setCount] = useState(0)

    useEffect(function(){
        console.log('useeffect rendered')
      }, [])
    
      console.log('Counter rendered')

    return (
        <div className='counter'>
            <h1>Counter: {count}</h1>
            <div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter