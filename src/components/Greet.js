import React from "react";

const Greet = (props) => {
  const {name, langType, children} = props;
  return (
    <div>
      <h1>{name}: {langType}</h1>
      {children}
    </div>
  )
}
export default Greet