import React, { useEffect } from "react";
import { Text, Flex } from "@chakra-ui/react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Carousel({ coffeePhotoString }) {
  const coffeePhotoArray = coffeePhotoString.split(" ");

  return (
    <CarouselProvider
      naturalSlideWidth={500}
      naturalSlideHeight={300}
      totalSlides={coffeePhotoArray.length}
    >
      <Slider>
        {coffeePhotoArray.map((photoPath, index) => (
          <Slide key={index} index={index}>
            <Image
              src={photoPath}
              alt="coffee beans"
              key={index}
              hasMasterSpinner={true}
            />
          </Slide>
        ))}
      </Slider>
      <Flex gap={5}>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </Flex>
    </CarouselProvider>
  );
}

export default Carousel;
