import { CountDown } from "./botones";

export const Contenido1 = () => {
  return (
    <>
      <hr
        style={{
          background: "#bf9060",
          height: "2px",
          width: "250px",
          margin: "25px auto",
          border: "#bf9060",
        }}
      />
      <div className="contenido2">
        <h1
          style={{
            color: "#bf9060",
            fontSize: "35px",
            width: "125px",
            marginBottom: "95px",
          }}
        >
          Falta
        </h1>
        <CountDown />
        <div className="love"></div>
      </div>
    </>
  );
};
