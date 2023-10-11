import React, { useEffect, useState } from 'react';

function SetInterval() {
  const [count, setCount] = useState(0); // Initialize count to 1

  useEffect(() => {
    setTimeout(() => {
      setCount(count=>count + 1);
    }, 1000);
  }, []);

  return (
    <div className="bg">
      <h3>setInterval method using useEffect</h3>
      <h1>{count}</h1>
    </div>
  );
}

export default SetInterval;
