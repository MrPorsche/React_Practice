// import './Counter.css'
import { useState, useEffect } from "react"

function Counter () {

    const [count, setCount] = useState(0)
    const [state, setState] = useState(false)

    console.log(state)

    // Case 1 => When you are passing an empty dependency array
    // useeffect will only run once, when the component mounts

    // useEffect(function(){
    //     console.log('useeffect rendered')
    //   }, [])
    
    
    // Case 2 => When we are passing something in the dependency array 
    //useeffect will run only when the component mounts and also when the value in dependency changes
    // useEffect(function () {
    //     console.log('useEffect Rendered')
    // }, [state, count])

    //   console.log('Counter rendered')

    //Case 3 => When you are using a return fun inside useEffect

    useEffect(function(){
        console.log('useeffect rendered')
        // window.addEventListener('click', function(){})
        return () => {
            // window.removeEventListener('click', function(){})
            console.log('component unmounts')
        }
    }, [])

    return (
        <div className='counter'>
            <h1>Counter: {count}</h1>
            <div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
            <div>
                <button onClick={() => setState(!state)}>Toggle</button>
            </div>
        </div>
    )
}

export default Counter