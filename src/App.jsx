import React, { useState, useEffect } from 'react'

const App = () => {
  const [colors, setColors] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']);
  const colorGenerator = () => {
    let hex = '#';
    for(let i = 0; i < 6; i++){
      hex += colors[randonNum()]
    }
    return hex;
  }

  const randonNum = () => {
    return Math.floor(Math.random() * colors.length);
  }
  
  return (
    <div>
      <h1 style={{color: `${colors}`}}>{colors}</h1>
      <button onClick={() => setColors(colorGenerator())}>ChangeColor</button>
    </div>
  )
}

export default App