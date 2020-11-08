import React from "react";
import "./Subheader.css";

function Subheader({ title, image }) {
  let divStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="subheader">
      <h2 className="subheader__title">{title}</h2>
      {image && <div className="subheader__flag" style={divStyle}></div>}
    </div>
  );
}

export default Subheader;
