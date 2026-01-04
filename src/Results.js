import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="fs-1"> {props.results.word}</h2>
        <h3>
          <em>{props.results.meanings[0].partOfSpeech}</em>
        </h3>
        <p>Definition: {props.results.meanings[0].definition}</p>
        <p>
          <strong>{props.results.meanings[0].example}</strong>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
