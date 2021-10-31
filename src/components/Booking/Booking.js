import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import bookingLogo from "../../images/logo/logo.png";
import "./Booking.css";

const Booking = () => {
  
  const { user } = useAuth();
  const [details, setDetails] = useState({});
  console.log(details);
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`https://nameless-brook-91912.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const onSubmit = (data) => {
    
    data.img = details.img;
    fetch(`https://nameless-brook-91912.herokuapp.com/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Booking proceed succfully");
        }
        
      });
      
    console.log(data);
  };
  
  
  
  return (
    <div className="guide-info">
      <div className="guide-details">
        <Container>
          <Card className="booking-card">
            <Card.Body>
              <Card.Img variant="top" src={details.img} />
              <Card.Title>
                <small>Guide Name: {details.name}</small>
              </Card.Title>
              <Card.Title>
                <small>Location: {details.location}</small>
              </Card.Title>
              <Card.Title>
                <small>languages: {details.languages}</small>
              </Card.Title>
              <Card.Text>{details.description}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>

      <div className="booking-form">
        <img
          style={{ width: "350px", marginBottom: "20px" }}
          src={bookingLogo}
          alt=""
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={user.displayName}
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          <input
            defaultValue={user.email}
            {...register("email")}
            placeholder="Username or Email"
          />
          {/* <input type="text" {...register("address")} placeholder="address" required/> */}

          <input
            type="text"
            {...register("address")}
            placeholder="Address"
            required
          />
          <input
            type="numer"
            {...register("phone")}
            placeholder="Phone"
            required
          />
          <input
            type="text"
            {...register("languages")}
            placeholder="Languages"
            required
          />
          <input type="submit" value="Booking Now" />
        </form>
      </div>
    </div>
  );
};

export default Booking;
