import AOS from "aos";
import { useEffect } from "react";
export const Contenido = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="contenido">
      <span
        style={{
          color: "#bf9060",
          border: "1px solid #bf9060",
          margin: "35px auto",
          padding: "5px",
          fontSize: "30px",
          borderRadius: "5px",
        }}
      >
        23-03-2023
      </span>
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
          color: "#bf9060",
          fontSize: "55px",
          width: "125px",
          marginBottom: "25px",
        }}
        data-aos="fade-right"
        data-aos-offset="200"
      >
        GER & NATI
      </h1>
      <span style={{ color: "#bf9060", fontSize: "50px" }}>«</span>
      <p
        style={{ color: "#bf9060", fontSize: "20px", width: "250px" }}
        data-aos="fade-left"
        data-aos-offset="200"
      >
        Y juntos hicimos de un día cualquiera una fecha para marcar en el
        calendario
      </p>
      <span style={{ color: "#bf9060", fontSize: "50px" }}>»</span>
    </div>
  );
};
