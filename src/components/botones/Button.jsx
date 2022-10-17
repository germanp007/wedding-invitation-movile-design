export const Button = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <a
        href="https://www.google.com.ar/maps/place/Dip.+Nac.+Osvaldo+Benedetti+89,+C1407+JUA,+Buenos+Aires/@-34.6352443,-58.4851501,17z/data=!3m1!4b1!4m15!1m9!3m8!1s0x95bcc9970aa02a05:0x4a75aca9f47eb72c!2sDip.+Nac.+Osvaldo+Benedetti+89,+C1407+JUA,+Buenos+Aires!3b1!8m2!3d-34.6352443!4d-58.4829614!14m1!1BCgIgAQ!3m4!1s0x95bcc9970aa02a05:0x4a75aca9f47eb72c!8m2!3d-34.6352443!4d-58.4829614?hl=es&authuser=0"
        target="_blank"
      >
        {" "}
        <button
          style={{
            backgroundColor: "#bf9060",
            padding: "15px",
            borderRadius: "30px",
            color: "white",

            fontFamily: "Montserrat, sans-serif",
            fontSize: "20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {children}
        </button>
      </a>
    </div>
  );
};
