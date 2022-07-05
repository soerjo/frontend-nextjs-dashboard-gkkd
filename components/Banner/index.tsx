/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const images = [
  { name: "ibadah01", image: "/images/banner01.png" },
  { name: "ibadah02", image: "/images/banner02.png" },
  { name: "ibadah03", image: "/images/banner03.png" },
];

export const Banner = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      transitionTime={700}
      infiniteLoop
      interval={5000}
      className="rounded-xl overflow-hidden"
    >
      {images.map((img, index) => (
        <div key={index}>
          <img src={img.image} alt={img.name} />
        </div>
      ))}
    </Carousel>
  );
};
