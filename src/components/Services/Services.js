import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://nameless-brook-91912.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="classes-text my-5">
        <h1 className="mt-3">OUR SERVICES</h1>
        <h5>Of Professional Guide</h5>
      </div>
      <Container>
        <div className="services-container mb-5">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
