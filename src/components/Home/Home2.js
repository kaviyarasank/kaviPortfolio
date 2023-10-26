import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/kavi.jpeg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Around 3 Years of Experience in Software Engineering with various
              domains, open source technologies, analyzing user needs and
              designing, constructing, and testing end-user applications.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> React js, Typescript, Redux, RTK Query, Next js, React Native </b>
              </i>

              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">React.js</b> and
              <i>
                <b className="purple"> Modern Javascript Library and </b>
              </i>
              <i>
                <b className="purple">Bootstrap , Material UI, Tailwind CSS and AntDesign</b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Applications </b> and also in areas
                related to <b className="purple">Deep Learning.</b>
              </i>
             

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="HomeKaviImg" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      
      </Container>
    </Container>
  );
}
export default Home2;
