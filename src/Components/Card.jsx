
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";

function Cards({img,name,description}) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img}/>        
        <Card.Body className='Card'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {description}
          </Card.Text>
          <Button variant="success">Más Info</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Cards;
