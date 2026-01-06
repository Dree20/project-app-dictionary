import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <p>
        <span className="Definition">Definition:</span>{" "}
        {props.meaning.definition}{" "}
      </p>

      <p className="Example">
        {props.meaning.example}
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
