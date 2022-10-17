export const Camera = (props) => {
  return (
    <svg
      style={{
        position: "absolute",
        top: "15%",
        right: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M149.1 64.8 138.7 96H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-74.7l-10.4-31.2C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 384c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
    </svg>
  );
};
