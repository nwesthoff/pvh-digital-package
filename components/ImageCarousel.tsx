import React, { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Flickity from "react-flickity-component";

const ImageCarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  color: white;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2rem 0rem;

  a {
    color: white;
  }

  @media (max-width: ${theme.breakpoints.phone}px) {
    padding: 0;
  }
`;

const flickityOptions = {
  wrapAround: true,
  prevNextButtons: false,
};

interface CarouselImage {
  src: string;
  desc?: ReactNode;
  alt?: string;
}

interface Props {
  imageArr: CarouselImage[];
}

const ImageCarousel = ({ imageArr }: Props) => {
  if (imageArr?.length > 0) {
    return (
      <ImageCarouselWrapper>
        <div style={{ width: "100%", margin: "2rem 0" }}>
          <Flickity
            elementType="div"
            options={flickityOptions} // takes flickity options {}
            reloadOnUpdate // default false
            static
          >
            {imageArr.map((image) => {
              return (
                <figure
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    width: "50%",
                    position: "relative",
                    margin: "0 2rem",
                    height: "500px",
                    display: "block",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <figcaption
                    style={{
                      boxSizing: "border-box",
                      position: "absolute",
                      bottom: 0,
                      background: "rgba(0,0,0,0.6)",
                      width: "100%",
                      padding: "1.2rem",
                    }}
                  >
                    {image.desc}
                  </figcaption>
                </figure>
              );
            })}
          </Flickity>
        </div>
      </ImageCarouselWrapper>
    );
  } else {
    return null;
  }
};

export default ImageCarousel;
