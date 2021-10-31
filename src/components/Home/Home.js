import React from "react";
import Services from "../Services/Services";
import "./Home.css";
import img1 from '../../images/destination/1.jpg';
import img2 from '../../images/destination/2.jpg';
import img3 from '../../images/destination/3.jpg';
import imgg1 from '../../images/promotion/1.jpg';
import imgg2 from '../../images/promotion/2.jpg';
import imgg3 from '../../images/promotion/3.jpg';
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="header-section">
        <h1>
          WE TRAVEL <span>NOT TO ESCAPE LIFE</span>
          <br />
          BUT FOR LIFE <span>NOT TO ESCAPE US</span>
        </h1>
      </div>
      <Services></Services>
      <Container>
      <div className="destination-text my-5">
          <h1 className="mt-3">OUR POPULAR DESTINATION</h1>
          <h5>Of Professional Guide</h5>
        </div>
      <div className="destination-content mb-5"> 
      <div className="destination-card">
          <Card>
            <Card.Img variant="top" style={{height: '230px'}} src={img1} />
            <Card.Body>
              <Card.Title> Lisbon</Card.Title>
              <Card.Text>
              Lisbon's name may have been derived from Proto-Celtic or Celtic Olisippo, Lissoppo, or a similar name which other visiting peoples like the ancient.
              </Card.Text>
              <Link to="/destination">
              <Button variant="dark">Visit Now</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
          <div className="destination-card">
          <Card>
            <Card.Img variant="top" style={{height: '230px'}} src={img2} />
            <Card.Body>
              <Card.Title> Moscow</Card.Title>
              <Card.Text>
              First documented in 1147, Moscow grew to become a prosperous and powerful city that served as the capital of the Grand Duchy that bears its namesake. 
              </Card.Text>
              <Link to="/destination">
              <Button variant="dark">Visit Now</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
          <div className="destination-card">
          <Card>
            <Card.Img variant="top" style={{height: '230px'}} src={img3} />
            <Card.Body>
              <Card.Title> Barcelona</Card.Title>
              <Card.Text>
              The Real Club de Tenis Barcelona - 1899 (meaning Royal Bercelona Tennis Club - 1899) is a private tennis club in Barcelona, Catalonia, Spain. 
              </Card.Text>
              <Link to="/destination">
              <Button variant="dark">Visit Now</Button>
              </Link>
            </Card.Body>
          </Card>
      </div>
      </div>
      </Container>
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
              <Card.Title> Fee Motor boat for 1 day.</Card.Title>
              <Card.Text>
              motorboat has one or more engines that propel the vessel over the top of the water. Boat engines vary in  
              </Card.Text>
              <Link to="/promotion">
              <Button variant="dark">Get Promotion</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
          <div className="destination-card">
          <Card>
            <Card.Img variant="top" style={{height: '196px'}} src={imgg2} />
            <Card.Body>
              <Card.Title> Free Dinner for 2 persons.</Card.Title>
              <Card.Text>
              Most modern cushioned mattress on a bed frame, the mattress resting either on a solid base, often 
              </Card.Text>
              <Link to="/promotion">
              <Button variant="dark">Get Promotion</Button>
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
              <Link to="/promotion">
              <Button variant="dark">Get Promotion</Button>
              </Link>
            </Card.Body>
          </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
