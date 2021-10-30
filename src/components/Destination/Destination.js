import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./Destination.css";
import img1 from '../../images/destination/1.jpg';
import img2 from '../../images/destination/2.jpg';
import img3 from '../../images/destination/3.jpg';
import img4 from '../../images/destination/4.jpg';
import img5 from '../../images/destination/5.jpg';
import img6 from '../../images/destination/6.jpg';
import { Link } from "react-router-dom";

const Destination = () => {
  return (
    <div>
      <div className="destination">
        <div className="destination-heading">
          <h1>POPULAR DESTINATION</h1>
        </div>
        <div className="destination-text my-5">
          <h1 className="mt-3">OUR POPULAR DESTINATION</h1>
          <h5>Of Professional Guide</h5>
        </div>
        <Container>
        <div className="destination-content mb-5">
          <div className="destination-card">
          <Card>
            <Card.Img variant="top" style={{height: '196px'}} src={img1} />
            <Card.Body>
              <Card.Title> Lisbon</Card.Title>
              <Card.Text>
              Lisbon's name may have been derived from Proto-Celtic or Celtic Olisippo, Lissoppo, or a similar name which other visiting peoples like the ancient.
              </Card.Text>
              <Link to="/">
              <Button variant="dark">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
          <div className="destination-card">
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title> Moscow</Card.Title>
              <Card.Text>
              First documented in 1147, Moscow grew to become a prosperous and powerful city that served as the capital of the Grand Duchy that bears its namesake. 
              </Card.Text>
              <Link to="/">
              <Button variant="dark">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
          <div className="destination-card">
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title> Barcelona</Card.Title>
              <Card.Text>
              The Real Club de Tenis Barcelona - 1899 (meaning Royal Bercelona Tennis Club - 1899) is a private tennis club in Barcelona, Catalonia, Spain. 
              </Card.Text>
              <Link to="/">
              <Button variant="dark">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
          <div className="destination-card">
          <Card>
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title> Florence</Card.Title>
              <Card.Text>
              Florence name may have been derived from Proto-Celtic or Celtic Olisippo, Florence, or a similar name which other visiting peoples like the ancient.
              </Card.Text>
              <Link to="/">
              <Button variant="dark">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
          <div className="destination-card">
          <Card>
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title> Rome</Card.Title>
              <Card.Text>
              First documented in 1150, Rome grew to become a prosperous and powerful city that served as the capital of the Grand Duchy that bears its namesake.
              </Card.Text>
              <Link to="/">
              <Button variant="dark">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
          <div className="destination-card">
          <Card>
            <Card.Img variant="top" src={img6} />
            <Card.Body>
              <Card.Title> Paris</Card.Title>
              <Card.Text>
              The Real Club de Tenis Paris meaning Royal Paris Tennis Club - 1899 is a private tennis club in Barcelona, Catalonia, Spain.
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
    </div>
  );
};

export default Destination;
