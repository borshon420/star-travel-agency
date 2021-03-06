import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Service.css';

const Service = ({ service }) => {
  const { name, img, description, location, languages, _id } = service;
  return (
    <div className="card-content mb-5">
      
        
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title><small>Location: {location}</small></Card.Title>
            <Card.Title><small>languages: {languages}</small></Card.Title>
            <Card.Text>
              {description.slice(0, 100)}
            </Card.Text>
            <Link to={`/booking/${_id}`}><Button variant="dark">Book Now</Button></Link>
          </Card.Body>
        </Card>
        
      
    </div>
  );
};

export default Service;
