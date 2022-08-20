import React from "react";
import Button from 'react-bootstrap/Button';

const Footer = (props) => {
  return (
    <div>
      <p className="finalText">{props.Footer}</p>
<br />

      <Button variant="dark" >Ve Todos los Episodios Aqui</Button> 
    </div>
  );
};
export default Footer;
