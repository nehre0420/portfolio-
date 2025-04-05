import React, { useState } from "react";

const NumberChanger = () => {
  const [number, setNumber] = useState(0);

  const nextNumber = () => {
    setNumber((prevNumber) => (prevNumber === 4 ? 0 : prevNumber + 1));
  };

  return (
    <div>
      <h2>Current Number: {number}</h2>
      <button onClick={nextNumber}>Next</button>
    </div>
  );
};

export default NumberChanger;
