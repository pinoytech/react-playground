import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function PokemonImage({ sprites }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const images = [
    "front_default",
    "front_shiny",
    "back_default",
    "back_shiny"
  ].map(key => sprites[key]);

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      {images.map((value, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={value} alt={index} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
