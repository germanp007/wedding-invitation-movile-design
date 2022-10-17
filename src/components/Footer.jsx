import floresBlancas from "../../public/imagenes/Mi proyecto.png";
import floresBlancas2 from "../../public/imagenes/Mi proyecto2.png";
import { Gift, WaveBottom } from "./botones";

export const Footer = () => {
  return (
    <div
      style={{
        background: "#bf9060",
        width: "100vw",
        height: "500px",
        position: "relative",
        overflow: "none",
      }}
    >
      <WaveBottom />
      <div
        style={{
          position: "absolute",
          top: "-5%",
          right: "0%",
          overflow: "hidden",
          width: "160px",
          textAlign: "center",
        }}
      >
        <img
          src={floresBlancas}
          alt={floresBlancas}
          style={{
            width: "220px",
            height: "210px",
            position: "relative",
            transform: "rotate(-12deg)",
          }}
        />
      </div>
      <Gift height="70px" fill="#fff" />
      <p
        style={{
          color: "white",
          fontSize: "16px",
          textAlign: "center",
          position: "relative",
          top: "35%",
          margin: "15px 20px",
          border: "1px solid white",
          width: "90vw",
          borderRadius: "14px",
          padding: "7px",
        }}
      >
        {" "}
        <span
          style={{
            fontSize: "22px",
          }}
        >
          {" "}
          Si deseas regalarnos algo más que tu hermosa presencia...
        </span>{" "}
        <br />
        <br /> Alias Banco Ciudad: NatiAnconetani <br />
        <br /> Alias Mercado Pago: La.Natita.Mercado.mp
      </p>
      <div
        style={{
          overflow: "hidden",
          width: "220px",
          height: "180px",
          position: "absolute",
          bottom: "0%",
          left: "-15%",
        }}
      >
        <img
          src={floresBlancas2}
          alt={floresBlancas2}
          style={{
            width: "220px",
            height: "210px",
            position: "relative",
          }}
        />
      </div>
    </div>
  );
};
