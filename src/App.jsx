import { Header } from "./Header";
import {
  Contenido,
  Contenido1,
  Contenido2,
  Contenido3,
  Contenido4,
  Contenido5,
  Footer,
  Slider,
} from "./components";

import AOS from "aos";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <>
      <Header />
      <Contenido />
      <Contenido1 />
      <Contenido2 />
      <Contenido3 />
      <hr
        style={{
          background: "#bf9060",
          height: "2px",
          width: "250px",
          margin: "35px auto",
          border: "#bf9060",
        }}
      />
      <Contenido4 />
      <hr
        style={{
          background: "#bf9060",
          height: "2px",
          width: "250px",
          margin: "50px auto",
          border: "#bf9060",
        }}
      />
      <Slider />
      <hr
        style={{
          background: "#bf9060",
          height: "2px",
          width: "250px",
          margin: "50px auto",
          border: "#bf9060",
        }}
      />
      <Contenido5 />
      <br />
      <br />
      <Footer />
    </>
  );
};
