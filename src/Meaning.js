import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="fs-4">
        <em>{props.meaning.partOfSpeech}</em>
      </h3>
      <p>Definition: {props.meaning.definition}</p>
      <p>{props.meaning.example}</p>
    </div>
  );
}
