import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          {props.synonyms.map(function (synonymn, index) {
            return <li key={index}>{synonymn}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
