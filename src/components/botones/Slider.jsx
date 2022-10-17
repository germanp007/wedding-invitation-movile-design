import { useState, useRef, useEffect } from "react";
import image1 from "../../../public/imagenes/image-2.jpeg";
import image2 from "../../../public/imagenes/image-3.jpeg";
import image3 from "../../../public/imagenes/image-4.jpeg";
import image4 from "../../../public/imagenes/image-5.jpg";
import image5 from "../../../public/imagenes/image-12.jpg";
import image6 from "../../../public/imagenes/image-7.jpg";
import image7 from "../../../public/imagenes/image-8.jpg";
import image8 from "../../../public/imagenes/image-9.jpg";
import image9 from "../../../public/imagenes/image-13.jpg";
import image10 from "../../../public/imagenes/image-11.jpg";
import image11 from "../../../public/imagenes/image-28.jpg";
import image12 from "../../../public/imagenes/image-14.jpg";
import image13 from "../../../public/imagenes/image-15.jpg";
import image14 from "../../../public/imagenes/image-16.jpg";
import image15 from "../../../public/imagenes/image-25.jpg";
export const Slider = () => {
  const colors = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ];
  const delay = 2500;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),

      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow" style={{ height: "50vh" }}>
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
          height: "50vh",
        }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{
              height: "50vh",
            }}
          >
            <div
              style={{
                background: "#bf9060",
                height: "320px",
                width: "360px",
                position: "relative",
                borderRadius: "20px",
                margin: "0 auto",
              }}
            >
              <img
                src={backgroundColor}
                alt={backgroundColor}
                style={{
                  height: "280px",
                  width: "320px",
                  borderRadius: "20px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
