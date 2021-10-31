import React, { useState, useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const Orders = ({order}) => {
    
    const {name, img, email, address, phone, languages, _id} = order;
    console.log(order)
    
    
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
            <Card.Img variant="top" src={img} />
            <h2>Ordered by</h2>
            <Card.Title>name: {name}</Card.Title>
            <Card.Title>email: {email}</Card.Title>
            <Card.Title><small>Address: {address}</small></Card.Title>
            <Card.Title><small>Phone: {phone}</small></Card.Title>
            <Card.Title><small>Languages: {languages}</small></Card.Title>
            <Button onClick={()=> handleDeleteOrder(_id)} variant="dark">Delete</Button>
          </Card.Body>
        </Card>
        
      </Container>
    </div>
        </div>
    );
};

export default Orders;