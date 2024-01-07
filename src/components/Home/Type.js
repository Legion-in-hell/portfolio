import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developpeur autodidacte",
          "En cours d'apprentissage",
          "Un grand passioné",
          "Contributeur Open Source",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
