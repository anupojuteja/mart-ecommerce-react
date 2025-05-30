// import React from 'react'
// import { useState ,useEffect} from 'react'

// const Card = () => {
//     let [City, setCity] = useState(['hhyd']);
//     let [City1, setCity1] = useState(['chennai']);
//   return (
//     <div>
//       <p>{City}</p>
//       <button onClick={() => {
//     setCity((prevCity) => (prevCity === 'hhyd' ? 'ongole' : 'hhyd'));}}>NAVIGATE</button>

//     <h5>{City1}</h5>

//     <button onClick={()=> {setCity1((tjea)=> (tjea === 'chennai'? 'orange':'chennai'));}}>terniary</button>
//     </div>
//   )
// }

// export default Card


// import React, { useState } from 'react';

// const Card = () => {
//   const [cities, setCities] = useState([]);       // Array of cities
//   const [newCity, setNewCity] = useState('');     // For input field

//   const addCity = () => {
//     if (newCity.trim()) {
//       setCities([...cities, newCity]);            // Add new city to array
//       setNewCity('');                             // Clear input
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter city"
//         value={newCity}
//         onChange={(e) => setNewCity(e.target.value)}
//       />
//       <button onClick={addCity}>Add City</button>

//       <ul>
//         {cities.map((city, index) => (
//           <ul key={index}>{city}</ul>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Card;
import { useState,useEffect } from "react";
import React from "react";


