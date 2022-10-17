import { Dress } from "./botones";

export const Contenido4 = () => {
  return (
    <div
      className="card-container"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-offset="300"
    >
      <div className="card">
        <h1
          style={{
            color: "white",
            fontSize: "35px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Dress Code
        </h1>
        <Dress fill="#fff" height="90px" />
        <p
          style={{
            textAlign: "center",
            color: "white",
            position: "absolute",
            bottom: "15%",
            left: "9%",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "20px",
            lineHeight: "30px",
          }}
        >
          Elegante Casual - Casual
        </p>
        <a
          href="https://www.matrimonios.cl/articulos/consejos-para-ser-la-mejor-invitada-en-un-matrimonio--c5100"
          style={{
            textAlign: "center",
            color: "white",
            position: "absolute",
            bottom: "3%",
            left: "34%",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "20px",
            lineHeight: "30px",
          }}
          target="_blank"
        >
          Ver aquí...
        </a>
      </div>
    </div>
  );
};
