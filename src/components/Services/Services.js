import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const { isLoading } = useAuth();

  useEffect(() => {
    fetch("https://nameless-brook-91912.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  if (isLoading) {
    return <Spinner className="mt-5" animation="border" />;
  }
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
