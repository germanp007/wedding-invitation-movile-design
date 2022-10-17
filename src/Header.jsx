import image3 from "../public/imagenes/test2.png";
import AOS from "aos";
import { useEffect, useRef } from "react";
import { Howl } from "howler";
import song from "../public/mp3/sonido.mp3";
import { MusicButtom, MusicPause } from "./components";
export const Header = () => {
  const isHover = useRef();
  const isNotHover = useRef();
  const sound = new Howl({
    src: [song],
    html5: true,
    preload: true,
  });

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="header-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,96L60,80C120,64,240,32,360,21.3C480,11,600,21,720,64C840,107,960,181,1080,224C1200,267,1320,277,1380,282.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div
        data-aos="flip-left"
        style={{
          position: "absolute",
          right: "2%",
          top: "2%",
        }}
      >
        <button
          ref={isHover}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            margin: "6px",
            background: "#bf9060",
            border: "none",
            transition: "background 1.5s",
          }}
          onClick={() => {
            sound.play();
            isHover.current.style.background = "black";
            isNotHover.current.style.background = "#bf9060";
          }}
        >
          <MusicButtom fill="#fff" />
        </button>
        <button
          ref={isNotHover}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            margin: "6px",
            background: "black",
            color: "white",
            border: "none",
            transition: "background 1s",
          }}
          onClick={() => {
            sound.pause();
            isHover.current.style.background = "#bf9060";
            isNotHover.current.style.background = "black";
          }}
        >
          <MusicPause fill="#fff" />
        </button>
      </div>
      <div
        style={{
          width: "180px",
          height: "200px",
          overflow: "hidden",
          position: "absolute",
          right: "0%",
          bottom: "-5%",
        }}
      >
        <img
          src={image3}
          alt={image3}
          style={{
            width: "200px",
            height: "200px",
            position: "relative",
          }}
        />
      </div>
      <img
        src={image3}
        alt={image3}
        style={{
          width: "200px",
          height: "200px",
          position: "absolute",
          top: "-5%",
          left: "-5%",
          transform: "rotate(-180deg)",
        }}
      />
    </div>
  );
};
