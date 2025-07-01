import React from "react";
import { Container, Button } from "react-bootstrap";
import heroBg from "../assets/img/banner-bg.png"; // Replace with your image file

const HeroSection = () => (
  <section
    className="py-5"
    style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      marginTop: "80px", // Equal to navbar height
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#f8f9fa", // fallback color
    }}
  >
    <Container className="text-center text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
      <h1 className="display-4 fw-bold mb-3">Welcome to BookWorld</h1>
      <p className="lead mb-4">
        Discover your next favorite book. Browse our collection and enjoy exclusive deals!
      </p>
      <Button variant="primary" size="lg" href="#books">
        Shop Books
      </Button>
    </Container>
  </section>
);

export default HeroSection;