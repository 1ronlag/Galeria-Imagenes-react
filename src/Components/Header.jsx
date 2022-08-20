import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1 className="titulo">{props.titulo} </h1>
    </div>
  );
};
export default Header;