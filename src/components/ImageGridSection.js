import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Import your images from the assets folder
import img1 from "../assets/img/thefault.jpg";
import img2 from "../assets/img/itends.png";
import img3 from "../assets/img/itends.png";
import img4 from "../assets/img/itends.png";
import img5 from "../assets/img/itends.png";
import img6 from "../assets/img/itends.png";

// Add descriptions for each image
const imageData = [
  { img: img1, desc: "The Fault in Our Stars by John Green" },
  { img: img2, desc: "It Ends With Us by Colleen Hoover" },
  { img: img3, desc: "It Ends With Us - Alternate Cover" },
  { img: img4, desc: "It Ends With Us - Special Edition" },
  { img: img5, desc: "It Ends With Us - Collector's Edition" },
  { img: img6, desc: "It Ends With Us - International Edition" },
];

const ImageGridSection = () => (
  <section className="py-5 bg-white">
    <Container>
      <h2 className="text-center mb-4">Gallery</h2>
      <Row>
        {imageData.map((item, idx) => (
          <Col key={idx} md={4} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: "200px" }}>
              <Card.Img variant="top" src={item.img} alt={`Gallery ${idx + 1}`} />
              <Card.Body>
                <Card.Text className="text-center">{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default ImageGridSection;