import AOS from "aos";
import { useEffect } from "react";
import rosas from "../../public/imagenes/rosas.png";
import { Button, Whatsapp } from "./botones";
export const Contenido3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <hr
        style={{
          background: "#bf9060",
          height: "2px",
          width: "250px",
          margin: "25px auto",
          border: "#bf9060",
        }}
      />
      <img
        src={rosas}
        alt="rosas"
        style={{
          height: "150px",
          position: "absolute",
          right: "-5%",
          top: "10%",
          transform: "rotate(-40deg)",
        }}
        data-aos="fade-right"
        data-aos-offset="200"
      />
      <h1
        style={{
          textAlign: "center",
          color: "#bf9060",
          fontSize: "35px",
          margin: "auto",
        }}
        data-aos="zoom-in"
        data-aos-offset="300"
      >
        Ceremonia <br /> y <br /> Recepción
      </h1>
      <hr
        style={{
          background: "#bf9060",
          height: "2px",
          width: "250px",
          margin: "25px auto",
          border: "#bf9060",
        }}
      />
      <h1
        style={{
          textAlign: "center",
          color: "#bf9060",
          margin: "auto",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "25px",
        }}
      >
        Día
      </h1>
      <br />
      <p
        style={{
          textAlign: "center",
          color: "#bf9060",
          margin: "auto",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "20px",
        }}
      >
        Jueves 23 de marzo a las 13 hrs
      </p>
      <hr
        style={{
          background: "#bf9060",
          height: "2px",
          width: "250px",
          margin: "25px auto",
          border: "#bf9060",
        }}
      />
      <h1
        style={{
          textAlign: "center",
          color: "#bf9060",
          margin: "auto",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "25px",
        }}
      >
        Lugar
      </h1>
      <br />
      <p
        style={{
          textAlign: "center",
          color: "#bf9060",
          margin: "auto 20px",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "20px",
          lineHeight: "30px",
        }}
      >
        Diputado Nacional Osvaldo Benedetti 89, CABA.
      </p>
      <p
        style={{
          textAlign: "center",
          color: "#bf9060",
          margin: "auto",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "20px",
          lineHeight: "30px",
        }}
      >
        Espacio Simple Eventos.
      </p>
      <br />
      <Button children="Como llegar" />
      <br />
      <img
        src={rosas}
        alt="rosas"
        style={{
          height: "150px",
          position: "absolute",
          left: "-5%",
          bottom: "10%",
          transform: "rotate(-15deg)",
        }}
        data-aos="fade-right"
        data-aos-offset="200"
      />
      <hr
        style={{
          background: "#bf9060",
          height: "2px",
          width: "250px",
          margin: "25px auto",
          border: "#bf9060",
        }}
      />
      <p
        style={{
          textAlign: "center",
          color: "#bf9060",
          margin: "auto",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "20px",
          lineHeight: "30px",
        }}
      >
        Confirmar Asistencia
      </p>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            height: "80px",
            background: "#bf9060",
            position: "relative",
            borderRadius: "30px",
            height: "55px",
            width: "170px",
          }}
        >
          <a
            href="https://wa.me/541167402943"
            target="_blank"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {" "}
            <Whatsapp fill="#fff" height="35px" style={{}} />
          </a>
        </div>
      </div>
    </div>
  );
};
