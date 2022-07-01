import React, { useState } from "react";

export default function StateExemple() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Clique ici (+1)</button>
      <button onClick={() => setCount(count + 2)}>Clique ici (+2)</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
