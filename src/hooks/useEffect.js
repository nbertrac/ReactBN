import React, { useState, useEffect } from "react";

export default function Exemple() {
  const [count, setCount] = useState(0);

  // similaire à componentDiMount et componentDiUpdate :

  useEffect(() => {
    //Metà jour le titre du document vie l'API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
  });

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
    </div>
  );
}
