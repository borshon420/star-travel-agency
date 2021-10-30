import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const Orders = ({order}) => {
    const {name, email, guide, location, languages, _id} = order;

    const handleDeleteOrder = id => {
        fetch(`https://nameless-brook-91912.herokuapp.com/orders/${id}`, {
            method: 'DELETE',

        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Are you sure you want to delete?')
                
            }
        })
        
    }
    return (
        <div>
            <div className="card-content mb-5">
      <Container>
        
        <Card>
          
          <Card.Body>
            <Card.Title>Order name: {name}</Card.Title>
            <Card.Title>Order email: {email}</Card.Title>
            <Card.Title><small>Guide Name: {guide}</small></Card.Title>
            <Card.Title><small>Location: {location}</small></Card.Title>
            <Card.Title><small>languages: {languages}</small></Card.Title>
            <Button onClick={()=> handleDeleteOrder(_id)} variant="dark">Delete</Button>
          </Card.Body>
        </Card>
        
      </Container>
    </div>
        </div>
    );
};

export default Orders;