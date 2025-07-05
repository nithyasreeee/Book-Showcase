import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import img from "../assets/img/thefault.jpg"; // sample book cover

const books = [
  { img, title: "Verity", price: "Rs. 1,800.00" },
  { img, title: "Reminders of Him", price: "Rs. 1,800.00" },
  { img, title: "Heart Bones", price: "Rs. 1,800.00" },
  { img, title: "Ugly Love", price: "Rs. 1,800.00" },
  { img, title: "It Ends With Us", price: "Rs. 1,800.00" },
  { img, title: "November 9", price: "Rs. 1,800.00" },
  { img, title: "Hopeless", price: "Rs. 1,800.00" },
  { img, title: "All Your Perfects", price: "Rs. 1,800.00" },
];

// Custom arrow components
const NextArrow = (props) => (
  <div className="custom-arrow next" onClick={props.onClick}>
    <FaChevronRight />
  </div>
);

const PrevArrow = (props) => (
  <div className="custom-arrow prev" onClick={props.onClick}>
    <FaChevronLeft />
  </div>
);

const BookSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="px-4 py-5 bg-white position-relative">
      <h2 className="text-center mb-4 text-black">📚 Featured Books</h2>
      <Slider {...settings}>
        {books.map((book, idx) => (
          <div key={idx} className="px-3 text-center">
            <div className="shadow-sm border rounded p-3">
              <img
                src={book.img}
                alt={book.title}
                style={{
                  height: "300px",
                  width: "auto",
                  objectFit: "cover",
                  display: "block",
                  margin: "0 auto",
                }}
              />
             <h6 className="mt-3 mb-1 fw-semibold text-black">{book.title}</h6>
              <p className="text-muted mb-2">{book.price}</p>
              <button className="btn btn-dark btn-sm">Add to Cart</button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Optional: Add custom CSS for arrows */}
      <style jsx>{`
        .custom-arrow {
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          z-index: 2;
          background: #000;
          color: #fff;
          padding: 10px;
          border-radius: 50%;
          cursor: pointer;
        }
        .custom-arrow.next {
          right: -15px;
        }
        .custom-arrow.prev {
          left: -15px;
        }
      `}</style>
    </div>
  );
};

export default BookSlider;
