import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="fs-4">
        <em>{props.meaning.partOfSpeech}</em>
      </h3>

      <p>Definition: {props.meaning.definition}</p>
      <p>
        <strong>{props.meaning.example}</strong>
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
