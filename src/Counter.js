// Counter.js (buggy)
import { useState } from 'react';

let count = 0; // erreur : état ne vient pas de useState

const Counter = () => {
  // ici on oublie useState, on manipule une variable
  const increment = () => {
    count += 1;
    console.log('count', count); // mais React ne rerend pas
  };

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default Counter;
