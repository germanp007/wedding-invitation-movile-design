import { Camera } from "./botones";

export const Contenido5 = () => {
  return (
    <div
      className="card"
      style={{ margin: "auto" }}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-offset="300"
    >
      <div className="flash"></div>
      <Camera fill="#fff" height="40px" />
      <h1
        style={{
          color: "white",
          fontSize: "20px",
          margin: "10px 20px",
          textAlign: "center",
          position: "relative",
          top: "25%",
        }}
      >
        Ayudanos a recordar este día para siempre, descargá la App e ingresá
        para compartir esos momentos únicos.
      </h1>
      <a
        href=" https://play.google.com/store/apps/details?id=net.bodas.android.wedshoots&referrer=af_tranid%3D0C6Om5cnHnBd3XkcSlzJMQ%26pid%3DWP-Android-ES%26c%3DWP-ES-LANDINGS"
        target="_blank"
        style={{
          color: "white",
          fontSize: "25px",
          position: "relative",
          top: "30%",
          left: "33%",
        }}
      >
        App aquí
      </a>
      <a
        target="_blank"
        style={{
          color: "white",
          fontSize: "20px",
          position: "relative",
          width: "300px",
          top: "43%",
          right: "12%",
        }}
        href=" http://www.wedshoots.com/ar/download?albumId=ARcfd9e760"
      >
        Ingresar al Album
      </a>
    </div>
  );
};
