import React from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import imgg1 from '../../images/promotion/1.jpg';
import imgg2 from '../../images/promotion/2.jpg';
import imgg3 from '../../images/promotion/3.jpg';

const Promitions = () => {
  const {isLoading} = useAuth();
  if (isLoading){
    return <Spinner className="mt-5" animation="border" />
  }
    
  return (
    <div>
      <div className="destination-heading">
        <h1>OUR PROMOTIONS</h1>
      </div>
      <div className="destination-text my-5">
        <h1 className="mt-3">PROMOTIONS</h1>
        <p>We have a few special promotions for our faithful customer</p>
      </div>
      <Container>
      <div className="destination-content mb-5">
          <div className="destination-card">
          <Card>
            <Card.Img variant="top" style={{height: '196px'}} src={imgg1} />
            <Card.Body>
              <Card.Title>Fee Motor boat for 1 day.</Card.Title>
              <Card.Text>
              motorboat has one or more engines that propel the vessel over the top of the water. Boat engines vary in shape, size, and type. 
              </Card.Text>
              <Link to="/">
              <Button variant="dark">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
          <div className="destination-card">
          <Card>
            <Card.Img variant="top" style={{height: '196px'}} src={imgg2} />
            <Card.Body>
              <Card.Title>Free Dinner for 2 persons.</Card.Title>
              <Card.Text>
              Most modern cushioned mattress on a bed frame, the mattress resting either on a solid base, often wood slats, or a sprung base
              </Card.Text>
              <Link to="/">
              <Button variant="dark">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
          <div className="destination-card">
          <Card>
            <Card.Img variant="top" style={{height: '196px'}} src={imgg3} />
            <Card.Body>
              <Card.Title>Free Scooter for 1 day.</Card.Title>
              <Card.Text>
              scooter in the 1960s with the name "kangaroo scooter", kangaroo scooters were built in Taiwan
              </Card.Text>
              <Link to="/">
              <Button variant="dark">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Promitions;
