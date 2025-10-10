import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import personajes from '../assets/personajes.png'; 
const Home = () => {
  return (
    <div>
    <h1>¡Bienvenido a pokepedia!</h1>
<img src={personajes} alt="personajes" />
 </div> );
};

export default Home; 