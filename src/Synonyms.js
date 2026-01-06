import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonymn, index) {
          return <li key={index}>{synonymn}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
