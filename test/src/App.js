// import './App.css';
// import React, {useState} from "react";
// import Counter from "./Counter";

// function App() {

//   const [showCounter, setShowCounter] = useState (false)

//   return (
//     <div className="app">
//           {showCounter && (
//             <div>
//             <Counter/>
//           </div>
//           )}
          
//             <div className='app-buttons'>
//               <button onClick={() => setShowCounter(true)}>Mount</button>
//               <button onClick={() => setShowCounter(false)}>Unmount</button>
//             </div>
//         </div>
//   );
// }

// export default App;


import React /*{ useEffect, useState }*/ from "react";
import './App.css';
import useFetchData from "./useFetchData";


// https://jsonplaceholder.typicode.com/users

function App() {

  // const [users, setUsers] = useState([])
  // const [photos, setPhotos] = useState([])

  // console.log('APP RENDERED')
  // console.log(photos)

  
  // async function fetchPhotos() {
  //   const resp = await fetch('https://jsonplaceholder.typicode.com/photos')

  //   // const data =await resp.json()
  //   // setUsers(data)
  //   setPhotos(await resp.json())
  // }

  // async function fetchUsers() {
  //   const resp = await fetch('https://jsonplaceholder.typicode.com/users')

  //   // const data =await resp.json()
  //   // setUsers(data)
  //   setUsers(await resp.json())
  // }
  
  // useEffect(() => {
  //   //   fetch('https://jsonplaceholder.typicode.com/users')
  //   // .then(response => response.json())
  //   // .then(data => setUsers(data))
  // fetchUsers()
  // fetchPhotos()
  // }, [])

  const [users] = useFetchData('https://jsonplaceholder.typicode.com/users')
  
  const [photos] =useFetchData('https://jsonplaceholder.typicode.com/photos')

  return (
    <div className="app">
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
      <img src={photos[0].url} alt="" />
      
    </div>
  )
}

export default App