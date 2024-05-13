import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarType = () => {
  const carTypeArray = [
    {
      name: "sedan",
      imageUrl: "/departments/sedan.webp",
    },
    {
      name: "hatchback",
      imageUrl: "/departments/hatchback.jpeg",
    },
    {
      name: "sports",
      imageUrl: "/departments/sports.webp",
    },
    {
      name: "convertible",
      imageUrl: "/departments/convertible.webp",
    },
    {
      name: "coupe",
      imageUrl: "/departments/coupe.jpg",
    },
    {
      name: "micro",
      imageUrl: "/departments/micro.webp",
    },
    {
      name: "suv",
      imageUrl: "/departments/suv.jpeg",
    },
    {
      name: "antique",
      imageUrl: "/departments/antique.jpg",
    },
    {
      name: "ev",
      imageUrl: "/departments/ev.jpeg",
    },
    {
      name: "musclecar",
      imageUrl: "/departments/muscle.webp",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Car Type</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {carTypeArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default CarType;
