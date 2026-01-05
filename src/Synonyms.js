import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonymn, index) {
          return <span key={index}>{synonymn}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
